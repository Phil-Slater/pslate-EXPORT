import { useEffect, useState } from 'react'
import axios from 'axios';

const UnsleevedCounts = () => {

    const [products, setProducts] = useState()

    useEffect(() => {
        fetchUnsleevedProducts()
    }, [])

    const fetchUnsleevedProducts = async () => {
        try {
            const orders = await axios.get('/unsleeved-counts')
            console.log(orders.data)
            setProducts(orders.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Unsleeved Counts</h1>
            <div className='order-container'>
                <div className='button-29' style={{ height: "20vh", cursor: "default", transform: "none" }}>
                    {/* {products ? <AdapterLogic products={products} /> : null} */}
                </div>
            </div>
            {/* <div className='order-container'>{productsMapped}</div> */}
        </div >
    )

}

export default UnsleevedCounts
