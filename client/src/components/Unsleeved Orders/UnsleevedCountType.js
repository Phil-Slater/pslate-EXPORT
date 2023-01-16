import CountColor from "./CountColor"

export default function UnsleevedCountType(props) {

    let counts = props.products?.reduce((b, a) => {
        const productColor = a.properties.filter(property => property.name === "Wire Color")

        let index = b.findIndex(c => c.instructions === a.instructions)
        if (index > -1) {
            // instruction already exists
            b[index].count += a.quantity
            let colorIndex = b[index].colors.findIndex(color => color.name === productColor[0]?.value)
            if (colorIndex > -1) {
                // color already exists
                b[index].colors[colorIndex].count += a.quantity
                b[index].colors[colorIndex].orders.push({ orderNumber: a.orderNumber, rush: a.rushOrder ? true : false })
            } else {
                b[index].colors.push({ name: productColor[0]?.value, count: a.quantity, orders: [{ orderNumber: a.orderNumber, rush: a.rushOrder ? true : false }] })
            }
        } else {
            // add new instruction
            b.push({
                instructions: a.instructions,
                count: a.quantity,
                colors: [{
                    name: productColor[0]?.value,
                    count: a.quantity,
                    orders: [{ orderNumber: a.orderNumber, rush: a.rushOrder ? true : false }]
                }]
            })
        }
        return b
    }, [])
    console.log(counts)

    // sort by highest count
    counts && counts.sort((a, b) => (a.count < b.count) ? 1 : -1)

    const countsMapped = counts && counts.map((count, index) => {
        const sortOrder = ["Black", "White", "Blue", "Red"]
        count.colors.sort((a, b) => {
            return sortOrder.indexOf(a.name) - sortOrder.indexOf(b.name)
        })
        const colorsMapped = count.colors.map((color, index) => {
            let rush = 0
            color.orders.forEach(order => {
                if (order.rush) rush++
            })
            return <p key={index}><CountColor color={color.name} /> {color.count} {rush !== 0 ? <span style={{ paddingLeft: "15px" }}>Rush: {rush}</span> : null}</p>

        })
        return <div key={index} className="missing-div">
            <h1>{count.instructions}</h1>
            <h2>Colors: {colorsMapped}</h2>
            <h3>Total: {count.count}</h3>
        </div>
    })
    return <>{countsMapped}</>
}
