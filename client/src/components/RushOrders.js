import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/styles.css'
import { NavLink } from 'react-router-dom'

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
                <div key={order.order_number} className="button-29">
                    <h1>#{order.order_number}</h1>
                    <h3>Order placed on:</h3>
                    <h2>{order.created_at}</h2>
                    <h3 className='rush'>{order.rushOrder ? order.rushOrder : null}</h3>
                </div>
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
