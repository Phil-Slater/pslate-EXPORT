const express = require("express")
const req = require("express/lib/request")
const router = express.Router()
const uCG = require('../utils/unsleevedCableGroups')
const updateUnsleeved = require('../utils/updateUnsleeved')
const updateSleeved = require('../utils/updateSleeved')
const reWriteDate = require('../utils/reWriteDate')
const urlFields = 'fields=order_number,line_items,created_at,order_status_url,note,id'

// PAGES
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/unsleeved-order-numbers', async (req, res) => {
    const ordersFetched = await getOrders()
    const unsleevedFiltered = filterUnsleevedOrders(ordersFetched)
    const ordersFinalized = reWriteDate(unsleevedFiltered)
    res.render('unsleeved-orders', { allOrders: ordersFinalized })
})

router.get('/unsleeved-order/:id', async (req, res) => {
    const order = await getOrder(req.params.id)
    const ordersUpdated = updateUnsleeved(order.data.orders)
    const ordersFinalized = reWriteDate(ordersUpdated)
    res.render('view-orders', { allOrders: ordersFinalized })
})

router.get('/sleeved-order-numbers', async (req, res) => {
    const ordersFetched = await getOrders()
    const sleevedFiltered = filterSleevedOrders(ordersFetched)
    const ordersFinalized = reWriteDate(sleevedFiltered)
    res.render('sleeved-orders', { allOrders: ordersFinalized })
})

router.get('/sleeved-order/:id', async (req, res) => {
    const order = await getOrder(req.params.id)
    const ordersUpdated = updateUnsleeved(order.data.orders) // change to updateSleeved when that function is ready
    const ordersFinalized = reWriteDate(ordersUpdated)
    res.render('view-orders', { allOrders: ordersFinalized })
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

module.exports = router
