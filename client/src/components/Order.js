import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PSUModel from './PSUModel';
import Color from './Color';
//import useSingleAndDoubleClick from '../utils/useSingleAndDoubleClick'
import OrderNote from './OrderNote';

function Order() {

    const [order, setOrder] = useState()
    const [style, setStyle] = useState([])

    const params = useParams()

    useEffect(() => {
        fetchOrder(params.id)
    }, [])

    const fetchOrder = async (orderNumber) => {
        try {
            const order = await axios.get(`/order/${orderNumber}`)
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

    const handleOrderReadyToShip = async (id) => {
        try {
            const order = await axios.put(`/order/${id}`)
            fetchOrder(order.data.order_number)
        } catch (error) {
            console.log(error)
        }
    }

    const handleAddMissingCable = async (product, orderNumber) => {
        console.log('double clicked!')
        try {
            const cable = await axios.post('/cable/missing', {
                product: product,
                orderNumber: orderNumber
            })
            if (cable.data.success) {
                alert(cable.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const products = order && order.line_items.map((product, index) => {
        return <div className={!style.includes(product.id) ? 'order-button' : 'order-button-grey'} key={product.id} onClick={() => { updateStyle(product.id) }} onDoubleClick={() => { handleAddMissingCable(product, order.order_number) }}>
            <h2><b>{product.title}</b></h2>
            <h3 className='quantity'><b>Quantity:</b> {product.quantity !== 1 ? <b className='quantity-num'>{product.quantity}</b> : product.quantity}</h3>
            <p><b>Build instructions:</b></p> <p>{product.instructions}</p>
            <p>{product.doubles ? product.doubles : null}</p>
            <p>{product.crimps ? <span className="white">{product.crimps}</span> : null}</p>
            <p>{product.combs ? <span className='combs'>{product.combs}</span> : null}</p>
            {product.design ? <img src={product.design} className="product-image" /> : null}
            {product.sku.includes('Power Switch') ? <p><b>Type:</b> {product.sku}</p> : null}
            {
                product.properties.map((property, index) => {
                    if (property.name?.includes('Color')) {
                        return < Color color={property} key={index} />
                    }
                    if (property.name?.includes('Length')) {
                        return <p key={index}><b>{property.name}:</b> {property.value}</p>
                    }
                })
            }
            <p>{product.psuModel ? <PSUModel psuModel={product.psuModel} /> : null}</p>
        </div >
    })
    console.log(order)

    return (

        <div className='order-container'>
            <div className='order-button'>
                {order ? order.tags === "Ready to Ship" ? <h2 className='order-note' style={{ textAlign: "center" }}>Ready to Ship!</h2> : null : null}
                <h1>{order ? <a href={`https://pslatecustoms.myshopify.com/admin/orders/${order.id}`} target={"_blank"}>#{order.order_number}</a> : `Loading...`}</h1>
                <h3>{order ? 'Order placed on:' : null}</h3>
                <h2 style={{ marginBottom: '1em' }}>{order ? order.created_at : null}</h2>
                <h3 className='rush'>{order ? order.rushOrder ? order.rushOrder : null : null}</h3>
                {order ? order.note ? <OrderNote note={order.note} /> : null : null}
                <h3>{order ? `Total items: ${order.total_items}` : null}</h3>
                <h3>{order ?
                    order.shipping_lines[0].title === 'Economy' ? 'Shipping method: First Class Package' :
                        `Shipping method: ${order.shipping_lines[0].title}` : null}</h3>
                <button onClick={() => { handleOrderReadyToShip(order.id) }}>Mark as Ready to Ship</button>
            </div>
            {products}
        </div>

    )
}


export default Order
