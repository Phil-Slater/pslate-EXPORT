const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function reWriteDate(orders) {
    orders.forEach(order => {
        const dateString = new Date(order.created_at).toLocaleString('en-US', { timeZone: 'America/New_York' })
        const date = new Date(dateString)
        order.created_at = `${daysOfWeek[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    })
    return orders
}

module.exports = reWriteDate;

