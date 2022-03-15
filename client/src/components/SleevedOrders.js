import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/styles.css'
import { useNavigate } from 'react-router-dom'

function SleevedOrders() {

    const navigate = useNavigate()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchSleevedOrders()
    }, [])

    const fetchSleevedOrders = async () => {
        console.log('fetching sleeved orders...')
        try {
            const orders = await axios.get('https://pslate-export.herokuapp.com/sleeved-order-numbers')
            console.log(orders.data)
            setOrders(orders.data)
        } catch (error) {
            console.log(error)
        }

    }

    const getOrder = (orderNumber) => {
        console.log('getOrder fired')
    }

    const ordersMapped = orders.map(order => {
        return <div key={order.order_number} className="button-29" onClick={() => getOrder(order.order_number)}>
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
