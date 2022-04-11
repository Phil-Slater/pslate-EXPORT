import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/styles.css'
import { NavLink } from 'react-router-dom'
import Sleeved12PinColors from './Sleeved12PinColors';

function Sleeved12Pins() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchSleeved12PinOrders()
    }, [])

    const fetchSleeved12PinOrders = async () => {
        try {
            const orders = await axios.get('/sleeved-12-pins')
            console.log(orders.data)
            setOrders(orders.data)
        } catch (error) {
            console.log(error)
        }
    }

    const ordersMapped = orders.map(order => {
        return <NavLink to={`/order/${order.order_number}`} key={order.order_number}>
            <div key={order.order_number} className="button-29" style={{ height: "50vh" }}>
                <h1>#{order.order_number}</h1>
                <h3>Order placed on:</h3>
                <h2>{order.created_at}</h2>
                <h3 className='rush'>{order.rushOrder ? order.rushOrder : null}</h3>
                {order.line_items.map(product => {
                    if (product.title.includes('12 Pin PCIE Sleeved')) {
                        return <div key={product.id}>
                            <h2 style={{ fontWeight: "bold" }}>{product.instructions}</h2>
                            <Sleeved12PinColors color={product.properties[3]} />
                        </div>
                    }
                })}
                {order.line_items.length === 1 ? <h2 style={{ color: "yellow" }}>Sleeved 12 Pin Only</h2> : null}
            </div>
        </NavLink>
    })

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Sleeved 12 Pins</h1>
            <div className='order-container'>{ordersMapped}</div>
        </div>
    )
}

export default Sleeved12Pins
