
export default function OrderTags(props) {
    console.log(props)
    if (props.order.tags === "Ready to Ship") {
        return (
            <div className="button-29" style={{ opacity: 0.4 }}>
                <h1>#{props.order.order_number}</h1>
                <h3>Order placed on:</h3>
                <h2>{props.order.created_at}</h2>
                <h3 className='rush'>{props.order.rushOrder ? props.order.rushOrder : null}</h3>
            </div>
        )
    } else if (props.order.tags === "Unsleeved Done; Missing Sleeved") {
        return (
            <div className="button-29">
                <h1>#{props.order.order_number}</h1>
                <h3>Order placed on:</h3>
                <h2>{props.order.created_at}</h2>
                <h3 className='rush'>{props.order.rushOrder ? props.order.rushOrder : null}</h3>
                <h3 style={{ color: "aqua", textTransform: "uppercase" }}>{props.order.tags}</h3>
            </div>
        )
    } else {
        return (
            <div className="button-29">
                <h1>#{props.order.order_number}</h1>
                <h3>Order placed on:</h3>
                <h2>{props.order.created_at}</h2>
                <h3 className='rush'>{props.order.rushOrder ? props.order.rushOrder : null}</h3>
                <h3 style={{ color: "red" }}>{props.order.missingItems ? "ITEMS MISSING" : null}</h3>
            </div>
        )
    }


}
