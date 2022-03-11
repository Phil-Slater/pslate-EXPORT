
import { useEffect } from 'react'

function SleevedOrders() {


    useEffect(() => {
        fetchSleevedOrders()
    })

    const fetchSleevedOrders = () => {
        fetch('https://pslate-export.herokuapp.com/sleeved-order-numbers')
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
