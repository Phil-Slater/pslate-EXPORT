
export default function Sleeved12PinColors(props) {
    switch (props.color?.value) {
        case 'Black':
            return <h2>{props.color.name}: <span className="black">{props.color.value}</span></h2>
        case 'White':
            return <h2>{props.color.name}: <span className="white">{props.color.value}</span></h2>
        case 'Light Gray':
            return <h2>{props.color.name}: <span className="graphite">{props.color.value}</span></h2>
        default:
            return null
    }
}
