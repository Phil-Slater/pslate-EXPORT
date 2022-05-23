
export default function OrderReadyToShip(props) {
    console.log(props)
    return (
        <div className="button-29" style={{ opacity: 0.4 }}>
            <h1>#{props.order.order_number}</h1>
            <h3>Order placed on:</h3>
            <h2>{props.order.created_at}</h2>
            <h3 className='rush'>{props.order.rushOrder ? props.order.rushOrder : null}</h3>
            {/* <h2 style={{ color: "red" }}>Ready to Ship!</h2> */}
        </div>
    )

}
