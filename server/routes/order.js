const express = require("express")
const router = express.Router()
const uCG = require('../utils/unsleevedCableGroups')
const getSignificantKeys = require('../utils/getSignificantKeys')
const updateUnsleeved = require('../utils/updateUnsleeved')
const updateSleeved = require('../utils/updateSleeved')
const reWriteDate = require('../utils/reWriteDate')
const urlFields = 'fields=order_number,line_items,created_at,order_status_url,note,id'
const getOrdersOld = require('../utils/oldGetOrdersFunction')
const cors = require('cors')
router.use(cors())
const authenticate = require('../utils/authenticationMiddleware')

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
    //res.render('unsleeved-orders', { allOrders: lastOrders })
})

router.get('/sleeved-order-numbers', authenticate, async (req, res) => {
    console.log('in sleeved order numbers')
    const ordersFetched = await getOrders()
    console.log('fetched the orders')
    const sleevedFiltered = filterSleevedOrders(ordersFetched)
    const ordersFinalized = reWriteDate(sleevedFiltered)
    const lastOrders = filterRushOrders(ordersFinalized)
    res.json(lastOrders)
    // res.render('sleeved-orders', { allOrders: lastOrders })
})

router.get('/unsleeved-order/:id', authenticate, async (req, res) => {
    const order = await getOrder(req.params.id)
    const orderKeysAdded = getSignificantKeys(order.data.orders)
    const ordersUpdated = updateUnsleeved(orderKeysAdded)
    const ordersFinalized = reWriteDate(ordersUpdated)
    res.render('view-orders', { allOrders: ordersFinalized })
})

router.get('/sleeved-order/:id', authenticate, async (req, res) => {
    const order = await getOrder(req.params.id)
    const orderKeysAdded = getSignificantKeys(order.data.orders)
    const ordersUpdated = updateSleeved(orderKeysAdded) // change to updateSleeved when that function is ready
    const ordersFinalized = reWriteDate(ordersUpdated)
    res.render('view-orders', { allOrders: ordersFinalized })
})

router.get('/order/:id', authenticate, async (req, res) => {
    const order = await getOrder(req.params.id)
    const orderKeysAdded = getSignificantKeys(order.data.orders)
    const unsleevedUpdated = updateUnsleeved(orderKeysAdded)
    const sleevedUpdated = updateSleeved(unsleevedUpdated)
    const ordersFinalized = reWriteDate(sleevedUpdated)
    const lastOrders = filterRushOrders(ordersFinalized)
    res.json(lastOrders)
})

router.get('/rush-orders', authenticate, async (req, res) => {
    const ordersFetched = await getOrders()
    const ordersFinalized = reWriteDate(ordersFetched.data.orders)
    const lastOrders = filterRushOrders(ordersFinalized)
    res.json(lastOrders)
})

router.get('/power-switches', authenticate, async (req, res) => {
    const ordersFetched = await getOrders()
    const ordersFinalized = reWriteDate(ordersFetched.data.orders)
    const dateUpdated = getPowerSwitchOrders(ordersFinalized)
    const lastOrders = filterRushOrders(dateUpdated)
    res.json(lastOrders)
})


// FUNCTIONS
async function getOrder(id) {
    return await instance.get(`/orders.json?ids=${id}&${urlFields}`)
}

async function getOrders() {
    return await instance.get(`/orders.json?status=unfilfilled&limit=250&${urlFields}`)
}

function filterSleevedOrders(orders) {
    let sleevedOrders = []
    orders.data.orders.forEach(order => {
        order.line_items.forEach(product => {
            let orderNumberCheck = sleevedOrders.some(key => key.order_number === order.order_number)
            if (!orderNumberCheck && product.title.includes('Sleeved')) {
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
                if (property.value.includes('ships in')) {
                    order.rushOrder = 'RUSH ORDER'
                }
            })
        })
    })

    orders.sort((a, b) => {
        return a.hasOwnProperty('rushOrder') ? -1 : b.hasOwnProperty('rushOrder') ? 1 : 0
    })
    return orders
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

module.exports = router
