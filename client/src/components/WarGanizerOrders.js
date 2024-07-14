import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/styles.css';
import { NavLink } from 'react-router-dom';
import OrderNotReady from './OrderNotReady';
import OrderTags from './OrderTags';

function WarGanizerOrders() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchWarGanizerOrders()
    }, [])

    const fetchWarGanizerOrders = async () => {
        try {
            const orders = await axios.get('/war-ganizers')
            console.log(orders.data)
            setOrders(orders.data)
        } catch (error) {
            console.log(error)
        }
    }

    const ordersMapped = orders.map(order => {
        return <NavLink to={`/order/${order.order_number}`} key={order.order_number}>
            {order.tags ? <OrderTags order={order} /> : <OrderNotReady order={order} />}
        </NavLink>
    })

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>War-Ganizer Orders</h1>
            <div className='order-container'>{ordersMapped}</div>
        </div>
    )
}

export default WarGanizerOrders

