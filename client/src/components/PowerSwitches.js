import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/styles.css'
import { NavLink } from 'react-router-dom'

function PowerSwitches() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchPowerSwitches()
    }, [])

    const fetchPowerSwitches = async () => {
        try {
            const orders = await axios.get('/power-switches')
            setOrders(orders.data)
            console.log(orders.data)
        } catch (error) {
            console.log(error)
        }
    }

    const ordersMapped = orders.map(order => {
        return <NavLink to={`/order/${order.order_number}`} key={order.order_number}>
            <div key={order.order_number} className="button-29" style={{ height: "50vh" }}>
                <h1>#{order.order_number}</h1>
                <h3>Order placed on:</h3>
                <h3>{order.created_at}</h3>
                <h3 className='rush'>{order.rushOrder ? order.rushOrder : null}</h3>
                {order.line_items.map(product => {
                    if (product.title.includes('Switch Power Button')) {
                        const splitSku = product.sku.split(' ')
                        return <div key={product.id}><h2>{splitSku[0]} - {splitSku[3]} {splitSku[4]}</h2>
                            {product.properties[0] ? <h2>{product.properties[0].name}: {product.properties[0].value}</h2> : null}
                            {product.properties[1] ? <h2>{product.properties[1].name === 'Case' && product.title.includes('12mm') ? `Case: ${product.properties[1].value}` : null}</h2> : null}
                            {product.properties.length === 1 ? <h2 className='red' style={{ textAlign: "center" }}>UNSLEEVED SWITCH</h2> : null}
                        </div>
                    }
                })}
                {order.line_items.length === 1 ? <h2 style={{ color: "yellow" }}>Power Switch Only</h2> : null}
            </div>
        </NavLink>
    })

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Power Switches</h1>
            <div className='order-container'>{ordersMapped}</div>
        </div>
    )
}

export default PowerSwitches
