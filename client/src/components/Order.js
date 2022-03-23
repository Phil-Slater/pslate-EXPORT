import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import PSUModel from './PSUModel';
import Color from './Color';
import useSingleAndDoubleClick from '../utils/useSingleAndDoubleClick'

function Order() {

    const [order, setOrder] = useState()
    const [style, setStyle] = useState([])

    const location = useLocation()
    const splitPath = location.pathname.split('/')
    const orderNumber = splitPath[2]

    useEffect(() => {
        fetchOrder(orderNumber)
    }, [])

    const fetchOrder = async (orderNumber) => {
        try {
            const order = await axios.get(`https://pslate-export.herokuapp.com/order/${orderNumber}`)
            setOrder(order.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    const updateStyle = (id) => {
        console.log('single clicked!')
        if (style.includes(id)) {
            setStyle(style.filter(styleId => styleId !== id))
        } else {
            setStyle([...style, id])
        }
    }

    const addToMissing = (id) => {
        console.log('double clicked!')
        console.log(id)
    }

    const products = order && order.line_items.map((product, index) => {
        return <div className={!style.includes(product.id) ? 'order-button' : 'order-button-grey'} key={product.id} onClick={() => { updateStyle(product.id) }} onDoubleClick={() => { addToMissing(product.id) }}>
            <h2><b>{product.title}</b></h2>
            <h3 className='quantity'><b>Quantity:</b> {product.quantity !== 1 ? <b className='quantity-num'>{product.quantity}</b> : product.quantity}</h3>
            <p><b>Build instructions:</b></p> <p>{product.instructions}</p>
            <p>{product.crimps ? <span className="white">{product.crimps}</span> : null}</p>
            <p>{product.doubles ? product.doubles : null}</p>
            {product.design ? <img src={product.design} className="product-image" /> : null}
            {product.sku.includes('Power Switch') ? <p><b>Type:</b> {product.sku}</p> : null}
            {product.properties.map((property, index) => {
                if (property.name?.includes('Color')) {
                    return < Color color={property} key={index} />
                }
                if (property.name?.includes('Length')) {
                    return <p key={index}><b>{property.name}:</b> {property.value}</p>
                }
            })}
            <p>{product.psuModel ? <PSUModel psuModel={product.psuModel} /> : null}</p>
        </div>
    })

    return (

        <div className='order-container'>
            <div className='order-button'>
                <h1>{order ? <a href={`https://pslatecustoms.myshopify.com/admin/orders/${order.id}`} target={"_blank"}>#{order.order_number}</a> : `Loading...`}</h1>
                <h3>{order ? 'Order placed on:' : null}</h3>
                <h2>{order ? order.created_at : null}</h2>
                <h3 className='rush'>{order ? order.rushOrder ? order.rushOrder : null : null}</h3>
                <h4 className='order-note'>{order ? order.note ? `Customer order note: ${order.note}` : null : null}</h4>
                <h3>{order ? `Total items: ${order.total_items}` : null}</h3>
                <h3>{order ?
                    order.shipping_lines[0].title === 'Economy' ? 'Shipping method: First Class Package' :
                        `Shipping method: ${order.shipping_lines[0].title}` : null}</h3>
            </div>
            {products}
        </div>

    )
}


export default Order
