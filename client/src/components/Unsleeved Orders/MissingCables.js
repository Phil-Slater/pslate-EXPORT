import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './MissingCables.css'
import PSUModel from '../PSUModel';
import Color from '../Color';


const MissingCables = () => {

    let [products, setProducts] = useState([])

    useEffect(() => {
        fetchMissingCables()
    }, [])

    const fetchMissingCables = async () => {
        try {
            const cables = await axios.get('/cable/missing')
            console.log(cables.data)
            setProducts(cables.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDeleteCable = async (id) => {
        console.log('delete clicked!', id)
        try {
            const cable = await axios.delete('/cable/missing', { data: { id: id } })
            if (cable.data.success) {
                alert(cable.data.message)
                fetchMissingCables()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const productsMapped = products.map((product) => {
        return <div key={product.id} className="double-div">
            <div style={{ width: "200%" }}>
                <NavLink to={`/order/${product.orderNumber}`} key={product.id}><h1>#{product.orderNumber}</h1></NavLink>
                <h3 className='rush'>{product.rushOrder ? product.rushOrder : null}</h3>
                <h2><b>{product.title}</b></h2>
                <h3 className='quantity'><b>Quantity:</b> {product.quantity !== 1 ? <><b className='quantity-num'>{product.quantity}</b><p>Quantity missing: (feature coming soon)</p></> : product.quantity}</h3>
                <p><b>Build instructions:</b></p> <p>{product.buildInstructions}</p>
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
                <button onClick={() => handleDeleteCable(product.id)}>DELETE FROM MISSING LIST</button>
            </div>
        </div>

    })

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Missing Cables</h1>
            <div className='doubles-container'>{productsMapped}</div>
        </div>
    )
}

export default MissingCables
