const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/get-orders', async (req, res) => {
    const orders = await getOrders()
    //console.log(orders)
    //res.json(orders)
    res.render('view-orders', { allOrders: orders })
})

async function getOrders() {
    const response = await instance.get('/orders.json?status=unfilfilled&limit=250&fields=order_number,line_items,created_at')
    //console.log(response.data.orders)
    const orders = response.data.orders
    orders.forEach((order) => {
        //console.log(order.line_items)
        order.line_items.forEach((product) => {
            delete product.name
            product.properties.forEach((property) => {
                if (product.title === 'XTIA Xproto 24 Pin Unsleeved Custom Cable' && property.value === 'Corsair SF450/SF600/SF750 Gold/Platinum') {
                    product.instructions = "Start at 180 (chart)"
                }

                if (property.name === 'Preview') {
                    product.design = property.value
                }
                const keys = ['_pplr_ref_variant', "_design_Preview", "_pplr_preview", 'Preview', 'Chipset', 'Motherboard Type']
                if (keys.includes(property.name)) {
                    //console.log(property.name)
                    delete property.name
                    delete property.value
                }
                //console.log(property)
                // property.filter(() => {
                //     property.name === 'Preview'
                //     property.name === "_pplr_ref_variant"
                //     property.name === "_design_Preview"
                //     property.name === "_pplr_preview"
                // })



                //     // got the value of the properties: property.value


            })
            console.log(product)
        })
    })

    return orders
}

// function getProducts(orders) {
//     orders.line_items.map(order => {

//     })
// }



module.exports = router;
