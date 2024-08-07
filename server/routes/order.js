const express = require("express")
const router = express.Router()
const uCG = require('../utils/unsleevedCableGroups')
const getSignificantKeys = require('../utils/getSignificantKeys')
const updateUnsleeved = require('../utils/updateUnsleeved')
const updateSleeved = require('../utils/updateSleeved')
const reWriteDate = require('../utils/reWriteDate')
const urlFields = 'fields=order_number,line_items,created_at,order_status_url,note,id,shipping_lines,tags'
const getOrdersOld = require('../utils/oldGetOrdersFunction')
const cors = require('cors')
router.use(cors())
const authenticate = require('../utils/authenticationMiddleware')
const Cable = require('../schemas/cable')

// PAGES
router.get('/', (req, res) => {
    res.render('index')
})


// for testing - view all open orders
router.get('/orders', async (req, res) => {
    const orders = await getOrdersOld()
    res.render('view-orders', { allOrders: orders })
})

router.get('/unsleeved-order-numbers', authenticate, async (req, res) => {
    const ordersFetched = await getOrders()
    const unsleevedFiltered = filterUnsleevedOrders(ordersFetched)
    const ordersFinalized = reWriteDate(unsleevedFiltered)
    const lastOrders = filterRushOrders(ordersFinalized)
    res.json(lastOrders)
})

router.get('/sleeved-order-numbers', authenticate, async (req, res) => {
    const ordersFetched = await getOrders()
    const sleevedFiltered = filterSleevedOrders(ordersFetched)
    const ordersFinalized = reWriteDate(sleevedFiltered)
    const lastOrders = filterRushOrders(ordersFinalized)
    res.json(lastOrders)
})

router.get('/sleeved-doubles', authenticate, async (req, res) => {
    const order = await getOrders()
    const orderKeysAdded = getSignificantKeys(order.data.orders)
    const sleevedUpdated = updateSleeved(orderKeysAdded)
    const doublesOrdersFiltered = filterSleevedDoubles(sleevedUpdated)
    res.json(doublesOrdersFiltered)
})

router.get('/order/:id', authenticate, async (req, res) => {
    console.log(req.params.id)
    const order = await getOrder(req.params.id)
    const orderKeysAdded = getSignificantKeys(order.data.orders)
    const unsleevedUpdated = updateUnsleeved(orderKeysAdded)
    const sleevedUpdated = updateSleeved(unsleevedUpdated)
    const ordersFinalized = reWriteDate(sleevedUpdated)
    res.json(ordersFinalized)
})

router.get('/rush-orders', authenticate, async (req, res) => {
    const ordersFetched = await getOrders()
    const ordersFinalized = reWriteDate(ordersFetched.data.orders)
    const lastOrders = filterRushOrders(ordersFinalized)
    res.json(lastOrders)
})

router.get('/power-switches', authenticate, async (req, res) => {
    const ordersFetched = await getOrders()
    const dateUpdated = reWriteDate(ordersFetched.data.orders)
    const ordersFinalized = getPowerSwitchOrders(dateUpdated)
    const lastOrders = filterRushOrders(ordersFinalized)
    res.json(lastOrders)
})

router.get('/sleeved-12-pins', authenticate, async (req, res) => {
    const ordersFetched = await getOrders()
    const orderKeysAdded = getSignificantKeys(ordersFetched.data.orders)
    const sleevedUpdated = updateSleeved(orderKeysAdded)
    const ordersFinalized = reWriteDate(sleevedUpdated)
    const sleeved12PinOrders = getSleeved12PinOrders(ordersFinalized)
    const lastOrders = filterRushOrders(sleeved12PinOrders)
    res.json(lastOrders)
})

router.get('/adapter-counts', authenticate, async (req, res) => {
    const orders = await getOrders()
    const sleevedFiltered = filterSleevedOrders(orders)
    const rushFiltered = filterRushOrders(sleevedFiltered)
    const orderKeysAdded = getSignificantKeys(rushFiltered)
    const sleevedUpdated = updateSleeved(orderKeysAdded)
    const adapterProducts = filterAdapterProducts(sleevedUpdated)
    res.json(adapterProducts)
})

router.get('/unsleeved-counts', authenticate, async (req, res) => {
    const orders = await getOrders()
    const sleevedFiltered = filterUnsleevedOrders(orders)
    const rushFiltered = filterRushOrders(sleevedFiltered)
    const orderKeysAdded = getSignificantKeys(rushFiltered)
    const unsleevedUpdated = updateUnsleeved(orderKeysAdded)
    const unsleevedProducts = filterUnsleevedProducts(unsleevedUpdated)
    res.json(unsleevedProducts)
})

router.put('/order/:id', async (req, res) => {
    const id = req.params.id
    const tag = req.body.tag
    try {
        const order = await updateOrder(id, tag)
        if (order) {
            res.json(order.data.order)
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error })
    }
})

router.get('/war-ganizers', authenticate, async (req, res) => {
    const orders = await getOrders()
    const warGazinerOrders = filterWarGanizerOrders(orders)
    const ordersFinalized = reWriteDate(warGazinerOrders)
    res.json(ordersFinalized)
})


// FUNCTIONS
async function getOrder(id) {
    const order = await instance.get(`/orders.json?name=${id}&${urlFields}`) // only returns unarchived orders
    console.log(order.data)
    if (order.data.orders.length === 0) {
        const archived = await instance.get(`/orders.json?name=${id}&status=closed&${urlFields},closed_at`) // use status=closed to find archived orders
        console.log(archived.data)
        return archived
    }

    return order
}

async function getOrders() {
    return await instance.get(`/orders.json?status=unfilfilled&limit=250&${urlFields}`)
}

async function updateOrder(id, tag) {
    console.log('updating order...', id)
    const order = await instance.get(`/orders/${id}.json`)
    console.log(order.data.order.tags)
    if (order.data.order.tags === tag) {
        try {
            const orderUpdated = await instance.put(`/orders/${id}.json`, {
                order: {
                    id: id,
                    tags: ''
                }
            })
            return orderUpdated
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            const orderUpdated = await instance.put(`/orders/${id}.json`, {
                order: {
                    id: id,
                    tags: tag
                }
            })
            if (orderUpdated) {
                // call DB, delete all products in missing cables list - delete by product ID
                sanitizeMissingDB(orderUpdated)
                return orderUpdated
            }
        } catch (error) {
            console.log(error)
        }
    }
}

async function sanitizeMissingDB(order) {
    for (const product of order.data.order.line_items) {
        try {
            await Cable.deleteOne({
                id: product.id
            })
        } catch (error) {
            console.log(error)
        }
    }
}

function filterSleevedOrders(orders) {
    let sleevedOrders = []
    orders.data.orders.forEach(order => {
        order.line_items.forEach(product => {
            let orderNumberCheck = sleevedOrders.some(key => key.order_number === order.order_number)
            if (!orderNumberCheck && (product.title.includes('Sleeved') || product.title.includes('Create Your Own'))) {
                sleevedOrders.push(order)
            }
        })
    })
    console.log(sleevedOrders.length)
    return sleevedOrders
}

function filterUnsleevedOrders(orders) {
    let unsleevedOrders = []
    orders.data.orders.forEach(order => {
        order.line_items.forEach(product => {
            let orderNumberCheck = unsleevedOrders.some(key => key.order_number === order.order_number)
            if (!orderNumberCheck && product.title.includes('Unsleeved')) {
                unsleevedOrders.push(order)
            }
        })
    })
    console.log(unsleevedOrders.length)
    return unsleevedOrders
}

function filterRushOrders(orders) {
    orders.forEach(order => {
        order.line_items.forEach(product => {
            product.properties.forEach(property => {
                if (!property.value) {
                    return
                } else if (property.value.includes('ships in')) {
                    order.rushOrder = 'RUSH ORDER'
                }
            })
        })
    })

    // orders.sort((a, b) => {
    //     return a.hasOwnProperty('rushOrder') ? -1 : b.hasOwnProperty('rushOrder') ? 1 : 0
    // })

    // sorts orders; prioritizes rush orders
    orders.sort((a, b) => {
        if (a.rushOrder !== b.rushOrder) {
            return a.rushOrder ? -1 : 1
        }
        return (a.order_number > b.order_number) ? 1 : -1
    })

    return orders
}

function filterSleevedDoubles(orders) {
    let sleevedDoublesProducts = []
    orders.forEach(order => {
        order.line_items.forEach(product => {
            if (product.doubles && product.doubles !== 'No doubles' && !product.title.includes('6 Pin')) {
                product.orderNumber = order.order_number
                sleevedDoublesProducts.push(product)
            }
            if (order.note) {
                product.orderNote = order.note
            }
        })
    })
    console.log(sleevedDoublesProducts.length)
    return sleevedDoublesProducts
}

function filterAdapterProducts(orders) {
    let adapterProducts = []
    orders.forEach(order => {
        order.line_items.forEach(product => {
            if (!product.instructions) {
                return
            } else if (product.instructions.includes('Red Box')) {
                product.orderNumber = order.order_number
                adapterProducts.push(product)
            }
        })
    })
    console.log(adapterProducts.length)
    return adapterProducts
}

function filterUnsleevedProducts(orders) {
    let unsleevedProducts = []
    orders.forEach(order => {
        console.log(order.order_number, order.tags)
        order.line_items.forEach(product => {
            if (product.title.includes('Unsleeved')) {
                if (order.rushOrder) {
                    product.rushOrder = "RUSH ORDER"
                }
                product.orderNumber = order.order_number
                unsleevedProducts.push(product)
            }
        })
    })
    return unsleevedProducts
}

function getPowerSwitchOrders(orders) {
    powerSwitchOrders = []
    orders.forEach(order => {
        order.line_items.forEach(product => {
            if (product.title.includes('Switch Power Button')) {
                powerSwitchOrders.push(order)
            }
        })
    })
    return powerSwitchOrders
}

function getSleeved12PinOrders(orders) {
    sleeved12PinOrders = []
    orders.forEach(order => {
        order.line_items.forEach(product => {
            if (product.title.includes('12 Pin PCIE Sleeved')) {
                sleeved12PinOrders.push(order)
            }
        })
    })
    return sleeved12PinOrders
}

function filterWarGanizerOrders(orders) {
    let warGazinerOrders = []
    orders.data.orders.forEach(order => {
        order.line_items.forEach(product => {
            let orderNumberCheck = warGazinerOrders.some(key => key.order_number === order.order_number)
            if (!orderNumberCheck && product.title.includes('War-Ganizer')) {
                warGazinerOrders.push(order)
            }
        })
    })
    console.log(warGazinerOrders.length)
    return warGazinerOrders
}

module.exports = router
