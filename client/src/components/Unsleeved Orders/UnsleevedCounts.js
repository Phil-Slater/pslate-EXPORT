import { useEffect, useState } from 'react'
import axios from 'axios';
import UnsleevedCountType from './UnsleevedCountType';

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

    // const productsMapped = products && products.map((product) => {
    //     return <div key={product.id} className="missing-div">
    //         <h1>{product.instructions}</h1>
    //     </div>
    // })

    const atx24 = products && products.filter(product => product.title.includes('24 Pin') && !product.title.includes('Choose Your Length'))
    const pcie86 = products && products.filter(product => product.title.includes('8 (6+2)') || product.title.includes('6 Pin') && !product.title.includes('Choose Your Length'))
    const eps = products && products.filter(product => product.title.includes('CPU/EPS') && !product.title.includes('Choose Your Length'))
    const pcie12 = products && products.filter(product => product.title.includes('12 Pin') && !product.title.includes('Choose Your Length'))
    const sata = products && products.filter(product => product.title.includes('SATA') && !product.title.includes('Choose Your Length'))
    const molex = products && products.filter(product => product.title.includes('Molex') && !product.title.includes('Choose Your Length'))

    return (
        <div className='missing-container' style={{ flexDirection: "column" }}>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Unsleeved Counts</h1>
            <h1 className='text-white font-bold text-4xl p-4 text-center'>24 pin:</h1>
            <UnsleevedCountType products={atx24} />
            <h1 className='text-white font-bold text-4xl p-4 text-center'>EPS:</h1>
            <UnsleevedCountType products={eps} />
            <h1 className='text-white font-bold text-4xl p-4 text-center'>8/6 PCIE:</h1>
            <UnsleevedCountType products={pcie86} />
            <h1 className='text-white font-bold text-4xl p-4 text-center'>12 pin:</h1>
            <UnsleevedCountType products={pcie12} />
            <h1 className='text-white font-bold text-4xl p-4 text-center'>SATA:</h1>
            <UnsleevedCountType products={sata} />
            <h1 className='text-white font-bold text-4xl p-4 text-center'>Molex:</h1>
            <UnsleevedCountType products={molex} />
        </div>
    )

}

export default UnsleevedCounts
