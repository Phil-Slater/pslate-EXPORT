
export default function PCIEDoublesCalculations(props) {
    if (props.product.doubles.includes('#1')) {
        const double = props.product.properties.find(property => property.name === 'Color 1')
        return <>#1 is double - {double.value}</>
    } else if (props.product.doubles.includes('#4')) {
        const double = props.product.properties.find(property => property.name === 'Color 4')
        return <>#4 is double - {double.value}</>
    } else {
        return null
    }
}
