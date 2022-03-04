const uCG = require('../utils/unsleevedCableGroups')

function updateSleeved(orders) {
    orders.forEach(order => {
        order.line_items.forEach(product => {

            // CORSAIR
            if (product.psuModel === 'Corsair SF450/SF600/SF750 Gold/Platinum' || product.psuModel === 'Corsair SF450/SF600 (Gold)') {




            }
        })
    })

}

module.exports = updateSleeved;
