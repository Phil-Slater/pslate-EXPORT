const psuModels = require('./psuModels')

const keys = ['_pplr_ref_variant', "_design_Preview", "_pplr_preview", 'Preview', 'Chipset', 'Motherboard Type', '_pplr_inv_variant', 'Motherboards']

function getSignificantKeys(orders) {
    orders.forEach(order => {
        order.total_items = 0
        order.line_items.forEach(product => {
            delete product.name
            order.total_items += product.quantity
            product.properties.forEach(property => {

                if (psuModels.includes(property.value)) {
                    product.psuModel = property.value
                }

                if (property.name.includes('Motherboards')) {
                    product.moboModel = property.value
                }

                if (property.name.includes('GPU Make')) {
                    product.gpuModel = property.value
                }

                if (property.value.includes('ships in')) {
                    order.rushOrder = 'RUSH ORDER'
                }

                if (property.name === 'Preview') {
                    product.design = property.value
                }

                if (property.value.includes('Over GPU Backplate')) {
                    console.log('inside over GPU')
                    product.gpuCableRouting = property.value
                }

                if (property.value.includes('Around end of GPU')) {
                    console.log('inside around GPU')
                    product.gpuCableRouting = property.value
                }

                if (property.value.includes('Vertical GPU')) {
                    console.log('inside vertical GPU')
                    product.gpuMountPosition = property.value
                }

                if (property.name.includes('sense wires')) {
                    product.senseWires = property.value
                }

                // FOR SSUPD under mobo cable routing with standoff mod
                // if (property.value.includes('SSUPD Under Motherboard')) {
                //     console.log('inside ssupd under mobo')
                //     product.ssupdMobo = property.value
                // }

                // add PSU Model, Motherboard model here in the future
                if (keys.includes(property.name)) {
                    delete property.name
                    delete property.value
                }
            })
            //console.log(product)
        })
    })
    return orders
}

module.exports = getSignificantKeys;
