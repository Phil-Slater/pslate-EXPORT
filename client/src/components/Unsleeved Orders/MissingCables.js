import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import '../Sleeved Orders/SleevedDoubles.css'

const MissingCables = () => {

    let [products, setProducts] = useState([])

    useEffect(() => {
        fetchMissingCables()
    }, [])

    const fetchMissingCables = async () => {
        try {
            const cables = await axios.get('/cable/missing')
            console.log(cables)
            setProducts(cables.data)
        } catch (error) {
            console.log(error)
        }
    }

    const productsMapped = products.map((product) => {
        return <NavLink to={`/order/${product.orderNumber}`} key={product.id}>
            <div key={product.id} className="double-div">
                <div style={{ width: "200%" }}>
                    <h1>#{product.orderNumber}</h1>
                    <h3 className='rush'>{product.rushOrder ? product.rushOrder : null}</h3>
                    <h2 className='quantity'><b>Quantity:</b> {product.quantity !== 1 ? <b className='quantity-num'>{product.quantity}</b> : product.quantity}</h2>
                    <p>{product.buildInstructions}</p>
                </div>
                <div>
                    {product.design ? <img src={product.design} /> : null}
                </div>
            </div>
        </NavLink>
    })

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Missing Cables</h1>
            <div className='doubles-container'>{productsMapped}</div>
        </div>
    )
}

export default MissingCables
