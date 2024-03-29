import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PSUModel from './PSUModel';
import Color from './Color';
import OrderNote from './OrderNote';
import Sleeved12PinHighlight from './Sleeved12PinHighlight';

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
        if (style.includes(id)) {
            setStyle(style.filter(styleId => styleId !== id))
        } else {
            setStyle([...style, id])
        }
    }

    const handleUpdateOrderTags = async (id, tag) => {
        try {
            const order = await axios.put(`/order/${id}`, { tag: tag })
            fetchOrder(order.data.order_number)
        } catch (error) {
            console.log(error)
        }
    }

    const handleAddMissingCable = async (product, order) => {
        try {
            const cable = await axios.post('/cable/missing', {
                product: product,
                order: order
            })
            if (cable.data.success) {
                alert(cable.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const products = order && order.line_items.map((product, index) => {
        return <div className={!style.includes(product.id) ? 'order-button' : 'order-button-grey'} key={product.id} onClick={() => { updateStyle(product.id) }} onDoubleClick={() => { handleAddMissingCable(product, order) }}>
            <h2><b>{product.title}</b></h2>
            <h3 className='quantity'><b>Quantity:</b> {product.quantity !== 1 ? <b className='quantity-num'>{product.quantity}</b> : product.quantity}</h3>
            <p><b>Build instructions:</b></p>
            <p>
                {product.instructions?.includes('SLEEVED') // 12 pin
                    ? <Sleeved12PinHighlight instructions={product.instructions} />
                    : product.instructions?.includes('Dual SATA')
                        ? <span className='green'>{product.instructions}</span>
                        : product.instructions
                }
            </p>
            <p>{product.numConnectors ? product.numConnectors + " connectors" : null}</p>
            <p>{product.doubles ? product.doubles : null}</p>
            <p>{product.crimps ? <span className="white">{product.crimps}</span> : null}</p>
            <p>{product.combs ? <span className='combs'>{product.combs}</span> : null}</p>
            {product.design ? <img src={product.design} className="product-image" alt="" /> : null}
            {product.sku?.includes('Power Switch') ? <p><b>Type:</b> {product.sku}</p> : null}
            {
                product.properties.map((property, index) => {
                    if (property.name?.includes('Color')) {
                        return < Color color={property} key={index} />
                    }
                    if (property.name?.includes('Length')) {
                        return <p key={index}><b>{property.name}:</b> {property.value}</p>
                    }
                    return null
                })
            }
            <p>{product.psuModel ? <PSUModel psuModel={product.psuModel} /> : null}</p>
        </div >
    })
    console.log(order)
    return (

        <div className='order-container'>
            <div className='order-button'>
                {order ? order.closed_at ? <h2 className='archived' style={{ textAlign: "center" }}>This order is archived</h2> : null : null}
                {order ? order.tags ? <h2 className='order-note' style={{ textAlign: "center" }}>{order.tags}</h2> : null : null}
                <h1>{order && <a href={`https://pslatecustoms.myshopify.com/admin/orders/${order.id}`} target={"_blank"} rel={"noreferrer"}>#{order.order_number}</a>}</h1>
                <h3>{order ? 'Order placed on:' : null}</h3>
                <h2 style={{ marginBottom: '1em' }}>{order ? order.created_at : null}</h2>
                <h3 className='rush'>{order ? order.rushOrder ? order.rushOrder : null : null}</h3>
                {order ? order.note ? <OrderNote note={order.note} /> : null : null}
                <h3>{order ? `Total items: ${order.total_items}` : null}</h3>
                <h3>{order ?
                    order.shipping_lines[0].title === 'Economy' ? 'Shipping method: First Class Package' :
                        `Shipping method: ${order.shipping_lines[0].title}` : null}</h3>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <button onClick={() => { handleUpdateOrderTags(order.id, "Ready to Ship") }} className="order-tag-button">Mark as Ready to Ship</button>
                    <button onClick={() => { handleUpdateOrderTags(order.id, "Unsleeved Done; Missing Sleeved") }} className="order-tag-button">Mark as Unsleeved Items Complete</button>
                </div>
            </div>
            {products}
        </div>

    )
}

export default Order
