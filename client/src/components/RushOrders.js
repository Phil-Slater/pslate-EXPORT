import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/styles.css'
import { NavLink } from 'react-router-dom'
import OrderNotReady from './OrderNotReady';
import OrderTags from './OrderTags';

function RushOrders() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchRushOrders()
    }, [])

    const fetchRushOrders = async () => {
        try {
            const orders = await axios.get('/rush-orders')
            setOrders(orders.data)
        } catch (error) {
            console.log(error)
        }
    }

    const ordersMapped = orders.map(order => {
        if (order.rushOrder) {
            return <NavLink to={`/order/${order.order_number}`} key={order.order_number}>
                {order.tags ? <OrderTags order={order} /> : <OrderNotReady order={order} />}
            </NavLink>
        }
    })

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Rush Orders</h1>
            <div className='order-container'>{ordersMapped}</div>
        </div>
    )
}

export default RushOrders
