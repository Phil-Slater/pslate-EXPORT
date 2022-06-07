import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/styles.css';
import { NavLink } from 'react-router-dom';
import OrderNotReady from './OrderNotReady';
import OrderReadyToShip from './OrderReadyToShip';

function UnsleevedOrders() {

    const [orders, setOrders] = useState([])
    const [missing, setMissing] = useState([])

    useEffect(() => {
        fetchUnsleevedOrders()
        fetchMissingCables()
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

    const fetchMissingCables = async () => {
        try {
            const cables = await axios.get('/cable/missing')
            console.log(cables.data)
            setMissing(cables.data)
        } catch (error) {
            console.log(error)
        }
    }

    const missingMapped = missing.map(product => product.orderNumber)

    const ordersMapped = orders && missing && orders.map(order => {
        missingMapped.forEach(orderNumber => {
            console.log(order)
            if (order.order_number === orderNumber) {
                order.missingItems = true
            }
        })
        return <NavLink to={`/order/${order.order_number}`} key={order.order_number}>
            {order.tags === "Ready to Ship" ? <OrderReadyToShip order={order} /> : <OrderNotReady order={order} />}
        </NavLink>
    })

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Unsleeved Orders</h1>
            <div className='buttons-div'>
                {orders ? <NavLink to="/missing-cables"><button className="py-4 w-80 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition duration-200 mb-2">View Missing Cables</button></NavLink> : null}
            </div>
            <div className='order-container'>{ordersMapped}</div>
        </div>
    )
}


export default UnsleevedOrders
