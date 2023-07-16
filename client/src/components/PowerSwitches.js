import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/styles.css'
import { NavLink } from 'react-router-dom'
import Color from './Color';

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
                        console.log(product.properties[0].value)
                        console.log(splitSku[0])
                        const ledColor = product.properties[0].value.split(' (').at(-1).split(' ')[0]
                        return <div key={product.id}>
                            <h2 style={{ marginBottom: "0.5em" }}>{splitSku[0]}mm {product.properties[0].value.split(' ')[0]} <span className={ledColor}>{ledColor} LED</span></h2>
                            {/* {product.properties[0] ? <h2>{product.properties[0].name}: {product.properties[0].value}</h2> : null} */}
                            {product.properties[1] ? <h2>{product.properties[1].name === 'Case' && splitSku[0] === '12' ? `Case: ${product.properties[1].value}` : null}</h2> : null}
                            {splitSku.at(-1) === 'unsleeved' ? <h2 className='green' style={{ textAlign: "center", marginBottom: "0.5em" }}>Unsleeved Switch</h2> : null}
                        </div>
                    }
                })}
                {order.line_items.length === 1 ? <h2 className='gold' style={{ textAlign: "center" }}>Power Switch Only</h2> : null}
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
