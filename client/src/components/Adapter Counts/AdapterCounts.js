import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import AdapterLogic from './AdapterLogic';
import AdapterType from './AdapterType';

const AdapterCounts = () => {

    const [products, setProducts] = useState()

    useEffect(() => {
        fetchAdapterProducts()
    }, [])

    const fetchAdapterProducts = async () => {
        try {
            const orders = await axios.get('/adapter-counts')
            console.log(orders.data)
            setProducts(orders.data)
        } catch (error) {
            console.log(error)
        }
    }

    const productsMapped = products && products.map(product => {
        return <NavLink to={`/order/${product.orderNumber}`} key={product.id}>
            <div key={product.id} className="button-29" style={{ height: "20vh" }}>
                <h1>#{product.orderNumber}</h1>
                <AdapterType product={product} />
            </div>
        </NavLink>
    })

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Adapters</h1>
            <div className='order-container'>
                <div className='button-29' style={{ height: "15vh", cursor: "default", transform: "none" }}>
                    {products ? <AdapterLogic products={products} /> : null}
                </div>
            </div>
            <div className='order-container'>{productsMapped}</div>
        </div >
    )
}

export default AdapterCounts
