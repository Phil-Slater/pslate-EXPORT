import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './SleevedDoubles.css'
import DoublesCalculations from './24DoublesCalculations';
import PCIEDoublesCalculations from './PCIEDoublesCalculations';

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
        return <NavLink to={`/order/${product.orderNumber}`} key={product.id}>
            <div key={product.id} className="double-div">
                <div style={{ width: "200%" }}>
                    <h1>#{product.orderNumber}</h1>
                    <p>{product.instructions}</p>
                    <p><b>Doubles:</b></p>
                    <p>{product.title.includes('24 Pin') ? product.doubles : null}</p>
                    <p>{product.title.includes('24 Pin') ? <DoublesCalculations product={product} /> : <PCIEDoublesCalculations product={product} />}</p>
                </div>
                <div>
                    {product.design ? <img src={product.design} /> : null}
                </div>
            </div>
        </NavLink>
    })

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Sleeved Doubles</h1>
            <div className='order-container'>{productsMapped}</div>
        </div>
    )
}

export default SleevedDoubles
