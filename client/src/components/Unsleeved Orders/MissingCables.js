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

    const productsMapped = products.map((product) => {
        return <NavLink to={`/order/${product.orderNumber}`} key={product.id}>
            <div key={product.id} className="double-div">
                <div style={{ width: "200%" }}>
                    <h1>#{product.orderNumber}</h1>
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
