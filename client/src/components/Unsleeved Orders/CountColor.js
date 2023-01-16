export default function CountColor(props) {
    switch (props.color) {
        case 'Black':
            return <span className="black">{props.color}</span>
        case 'White':
            return <span className="white">{props.color}</span>
        case 'Blue':
            return <span className="blue">{props.color}</span>
        case 'Red':
            return <span className="red">{props.color}</span>
        case 'Green':
            return <span className="green">{props.color}</span>
        case 'Yellow':
            return <span className="yellow">{props.color}</span>
        default:
            return null
    }
}
