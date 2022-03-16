import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/styles.css'
import { NavLink } from 'react-router-dom'

function Sleeved12Pins() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchSleeved12PinOrders()
    }, [])

    const fetchSleeved12PinOrders = async () => {
        const orders = await axios.get('https://pslate-export.herokuapp.com/sleeved-12-pins')
        console.log(orders.data)
        setOrders(orders.data)
    }

    const ordersMapped = orders.map(order => {
        return <NavLink to={`/order/${order.order_number}`} key={order.order_number}>
            <div key={order.order_number} className="button-29">
                <h1>#{order.order_number}</h1>
                <h3>Order placed on:</h3>
                <h2>{order.created_at}</h2>
                <h3 className='rush'>{order.rushOrder ? order.rushOrder : null}</h3>
                {order.line_items.map(product => {
                    if (product.title.includes('12 Pin PCIE Sleeved')) {
                        return <div key={product.id}>
                            <h2>{product.instructions}</h2>
                            <h2>{product.properties[3].name}: {product.properties[3].value}</h2>
                        </div>
                    }
                })}
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
