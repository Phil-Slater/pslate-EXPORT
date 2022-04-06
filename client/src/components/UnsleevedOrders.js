import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/styles.css'
import { NavLink } from 'react-router-dom'

function UnsleevedOrders() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchUnsleevedOrders()
    }, [])

    const fetchUnsleevedOrders = async () => {
        try {
            const orders = await axios.get('/unsleeved-order-numbers')
            console.log(orders.data)
            setOrders(orders.data)
        } catch (error) {
            console.log(error)
        }
    }

    const ordersMapped = orders.map(order => {
        return <NavLink to={`/order/${order.order_number}`} key={order.order_number}>
            <div className="button-29">
                <h1>#{order.order_number}</h1>
                <h3>Order placed on:</h3>
                <h2>{order.created_at}</h2>
                <h3 className='rush'>{order.rushOrder ? order.rushOrder : null}</h3>
            </div>
        </NavLink>
    })

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Unsleeved Orders</h1>
            <div className='order-container'>{ordersMapped}</div>
        </div>
    )
}


export default UnsleevedOrders
