
import { useEffect } from 'react'

function SleevedOrders() {


    useEffect(() => {
        fetchSleevedOrders()
    })

    const fetchSleevedOrders = () => {
        fetch('http://localhost:8080/sleeved-order-numbers')
            .then(response => response.json())
            .then(result => console.log(result))
    }

    return (
        <div>
            <h1>Sleeved Orders</h1>
        </div>
    )
}

export default SleevedOrders
