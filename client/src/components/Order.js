import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/styles.css'
import { useLocation } from 'react-router-dom'
import PSUModel from './PSUModel';

function Order() {

    const [order, setOrder] = useState()

    const location = useLocation()
    const splitPath = location.pathname.split('/')
    const orderNumber = splitPath[2]
    console.log(orderNumber)

    useEffect(() => {
        fetchOrder(orderNumber)
    }, [])

    const fetchOrder = async (orderNumber) => {
        const order = await axios.get(`https://pslate-export.herokuapp.com/order/${orderNumber}`)
        setOrder(order.data[0])
    }
    console.log(order)
    const products = order && order.line_items.map(product => {
        return <div className='order-button' key={product.id}>
            <h2>{product.title}</h2>
            <h3>Quantity: {product.quantity !== 1 ? <b className='quantity'>{product.quantity}</b> : product.quantity}</h3>
            <p><b>Build instructions:</b> {product.instructions}</p>
            <p>{product.crimps ? product.crimps : null}</p>
            <p>{product.doubles ? product.doubles : null}</p>
            {product.design ? <img src={product.design} /> : null}
            {product.sku.includes('Power Switch') ? <p><b>Type:</b> {product.sku}</p> : null}
            {product.properties.map(property => {
                if (property.name?.includes('Color') || property.name?.includes('Length')) {
                    return <p><b>{property.name}:</b> {property.value}</p>
                }
            })}
            <p>{product.psuModel ? <PSUModel psuModel={product.psuModel} /> : null}</p>
        </div>
    })

    return (

        <div className='order-container'>
            <div className='order-button'>
                <h1>{order ? `#${order.order_number}` : `Loading...`}</h1>
                <h3>{order ? 'Order placed on:' : null}</h3>
                <h2>{order ? order.created_at : null}</h2>
                <h3 className='rush'>{order ? order.rushOrder ? order.rushOrder : null : null}</h3>
                <h3>{order ? order.note ? `Customer order note: ${order.note}` : null : null}</h3>
                <h3>{order ? `Total items: ${order.total_items}` : null}</h3>
            </div>
            {products}
        </div>

    )
}


export default Order
