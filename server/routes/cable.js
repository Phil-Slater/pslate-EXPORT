const express = require("express");
const router = express.Router();
const Cable = require('../schemas/cable');

router.post('/missing', async (req, res) => {
    console.log(req.body.product)
    const { id, quantity, psuModel, instructions, properties, title } = req.body.product
    const { order_number, rushOrder } = req.body.order

    const cable = await Cable.findOne({ id: id })

    if (!cable) {
        try {
            const cableAdded = await Cable.create({
                orderNumber: order_number,
                rushOrder: rushOrder,
                quantity: quantity,
                buildInstructions: instructions,
                psuModel: psuModel,
                id: id,
                properties: properties,
                title: title,

            })
            if (cableAdded) {
                res.json({ success: true, message: 'Cable Added to Missing List.' })
            }
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            const cableRemoved = await Cable.deleteOne({
                id: id
            })
            if (cableRemoved) {
                res.json({ success: true, message: 'Cable removed from missing list.' })
            }
        } catch (error) {
            console.log(error)
        }
    }
})

router.get('/missing', async (req, res) => {
    await deleteFulfilledFromMissing()
    const missing = await Cable.find({})
    missing.sort((a, b) => {
        if (a.rushOrder !== b.rushOrder) {
            return a.rushOrder ? 1 : -1
        }
        return (a.orderNumber < b.orderNumber) ? 1 : -1
    })
    res.json(missing)
})

router.delete('/missing', async (req, res) => {
    const id = req.body.id
    try {
        const cableRemoved = await Cable.deleteOne({
            id: id
        })
        if (cableRemoved) {
            res.json({ success: true, message: 'Cable removed from missing list.' })
        }
    } catch (error) {
        console.log(error)
    }

})

async function getOrders() {
    const unfulfilled = await instance.get(`/orders.json?status=unfulfilled&limit=250&fields=order_number`)
    return unfulfilled.data.orders
}

async function deleteFulfilledFromMissing() {
    const missingCables = await Cable.find({})
    const openOrders = await getOrders()

    let missingOrderNums = []
    missingCables.forEach(cable => {
        missingOrderNums.push(cable.orderNumber)
    })

    let openOrderNums = []
    openOrders.forEach(order => {
        openOrderNums.push(order.order_number)
    })

    // find order numbers that are in missing list an NOT in unfulfilled orders
    const fulfilledOrdersInMissing = missingOrderNums.filter(num => !openOrderNums.includes(num))

    for (const orderNum of fulfilledOrdersInMissing) {
        // delete by order number
        try {
            await Cable.deleteOne({
                orderNumber: orderNum
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = router;
