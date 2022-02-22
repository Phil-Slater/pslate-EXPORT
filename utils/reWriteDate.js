const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

function reWriteDate(orders) {
    orders.forEach(order => {
        const string_date = order.created_at
        const date = new Date(string_date)
        order.created_at = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    })
    return orders
}

module.exports = reWriteDate

