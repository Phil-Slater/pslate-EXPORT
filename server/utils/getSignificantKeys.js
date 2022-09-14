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

                // || property.name.includes('GPU Make')
                if (property.name.includes('GPUs') || property.name === 'GPU Model' || property.name.includes('GPU Make') || property.value === 'Radeon VII') {
                    product.gpuModel = property.value
                }

                if (property.name.includes('GPU Make')) {
                    product.gpuTextBox = property.value
                }

                if (property.value.includes('ships in')) {
                    order.rushOrder = 'RUSH ORDER'
                }

                if (property.name === 'Preview') {
                    product.design = property.value
                }

                if (property.value.includes('Over GPU Backplate')) {
                    product.gpuCableRouting = property.value
                }

                if (property.value.includes('Around end of GPU')) {
                    product.gpuCableRouting = property.value
                }

                if (property.value.includes('Vertical GPU')) {
                    product.gpuMountPosition = property.value
                }

                if (property.name.includes('sense wires')) {
                    product.senseWires = property.value
                }

                // for 12 pins
                if (property.name === 'Case') {
                    product.case = property.value
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
