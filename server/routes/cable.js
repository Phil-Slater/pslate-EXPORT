const express = require("express");
const router = express.Router();
const Cable = require('../schemas/cable')

router.post('/missing', async (req, res) => {

    const { id, quantity, psuModel, instructions, properties } = req.body.product
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
    const missingCables = await Cable.find({})
    missingCables.sort((a, b) => (a.orderNumber < b.orderNumber) ? 1 : -1)
    // missingCables.sort((a, b) => {
    //     return a.hasOwnProperty('rushOrder') ? -1 : b.hasOwnProperty('rushOrder') ? 1 : 0
    // })
    res.json(missingCables)
})

module.exports = router;
