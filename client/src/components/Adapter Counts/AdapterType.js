
export default function AdapterType(props) {
    if (props.product.psuModel.includes('Corsair')) {
        return <h2>Corsair Adapter</h2>
    } else if (props.product.psuModel.includes('Cooler Master')) {
        return <h2>Cooler Master Adapter</h2>
    } else if (props.product.psuModel.includes('EVGA')) {
        return <h2>EVGA Adapter</h2>
    } else {
        return null
    }
}
