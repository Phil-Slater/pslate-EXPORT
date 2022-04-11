
export default function AdapterLogic(props) {
    let corsair = 0
    let coolerMaster = 0
    let evga = 0
    props.products.forEach(product => {
        if (product.psuModel.includes('Corsair')) {
            corsair += 1
        } else if (product.psuModel.includes('Cooler Master')) {
            coolerMaster += 1
        } else if (product.psuModel.includes('EVGA')) {
            evga += 1
        }
    })
    return (
        <>
            <h2>Total Corsair: {corsair}</h2>
            <h2>Total Cooler Master: {coolerMaster}</h2>
            <h2>Total EVGA: {evga}</h2>
        </>
    )
}
