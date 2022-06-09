import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './SleevedDoubles.css'
import DoublesCalculations from './24DoublesCalculations';
import PCIEDoublesCalculations from './PCIEDoublesCalculations';
import OrderNote from '../OrderNote';
import DualSATADoubles from './DualSATADoubles';

const SleevedDoubles = () => {

    let [products, setProducts] = useState([])

    useEffect(() => {
        fetchDoublesProducts()
    }, [])

    const fetchDoublesProducts = async () => {
        try {
            const orders = await axios.get('/sleeved-doubles')
            console.log(orders.data)
            setProducts(orders.data)
        } catch (error) {
            console.log(error)
        }
    }

    const productsMapped = products.map(product => {
        return <div key={product.id} className="double-div">
            <div style={{ width: "200%" }}>
                <NavLink to={`/order/${product.orderNumber}`} key={product.id}> <h1>#{product.orderNumber}</h1></NavLink>
                <h2 className='quantity'><b>Quantity:</b> {product.quantity !== 1 ? <b className='quantity-num'>{product.quantity}</b> : product.quantity}</h2>
                <p>{product.instructions}</p>
                <p><b>Doubles:</b></p>
                <p>{product.title.includes('24 Pin') ? product.doubles : null}</p>
                <p>{product.title.includes('24 Pin')
                    ? <DoublesCalculations product={product} />
                    : product.title.includes('PCIE')
                        ? <PCIEDoublesCalculations product={product} />
                        : <DualSATADoubles product={product} />}</p>
                {product.orderNote ?
                    <div style={{ marginTop: "2em", width: "100%", wordWrap: "break-word" }}>
                        <OrderNote note={product.orderNote} />
                    </div>
                    : null}
            </div>
            <div>
                {product.design ? <img src={product.design} /> : null}
            </div>
        </div>

    })

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Sleeved Doubles</h1>
            <div className='doubles-container'>{productsMapped}</div>
        </div>
    )
}

export default SleevedDoubles
