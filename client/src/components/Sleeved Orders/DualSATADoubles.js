
export default function DualSATADoubles(props) {
    const filtered = props.product.properties.filter(property => property.name?.startsWith('Color '))
    const mapped = filtered.map((prop, index) => {
        return <p key={index}>{prop.name}: {prop.value}</p>
    })
    return mapped
}
