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
        setOrders(orders.data)
    }

    const ordersMapped = orders.map(order => {
        return <div key={order.order_number} className="button-29">
            <h1>#{order.order_number}</h1>
            <h3>Order placed on:</h3>
            <h2>{order.created_at}</h2>
            <h3 className='rush'>{order.rushOrder ? order.rushOrder : null}</h3>
        </div>
    })

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Sleeved Orders</h1>
            <div className='order-container'>{ordersMapped}</div>
        </div>
    )
}

export default SleevedOrders