import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/styles.css'

function SleevedOrders() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchSleevedOrders()
    }, [])

    const fetchSleevedOrders = async () => {
        const orders = await axios.get('https://pslate-export.herokuapp.com/sleeved-order-numbers')
        console.log(orders.data)
        setOrders(orders.data)
    }

    const ordersMapped = orders.map(order => {
        return <div key={order.order_number} className="button-29">
            <h1 className='h1-text'>{order.order_number}</h1>
            <h3>Order placed on:</h3>
            <h2>{order.created_at}</h2>
            <h3>{order.rushOrder ? order.rushOrder : null}</h3>
        </div>
    })

    return (
        <div>
            <h1 className='h1-text'>Sleeved Orders</h1>
            <div className='order-container'>{ordersMapped}</div>
        </div>
    )
}

export default SleevedOrders
