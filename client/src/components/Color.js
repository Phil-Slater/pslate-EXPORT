
export default function Color(props) {
    // console.log(props)

    const split = props.color.name.split(' ')
    if (split[split.length - 1] === 'Color') {
        switch (props.color.value) {
            case 'Black':
                return <p><b>{props.color.name}:</b> <span className="black">{props.color.value}</span></p>
            case 'White':
                return <p><b>{props.color.name}:</b> <span className="white">{props.color.value}</span></p>
            case 'Red':
                return <p><b>{props.color.name}:</b> <span className="red">{props.color.value}</span></p>
            case 'Blue':
                return <p><b>{props.color.name}:</b> <span className="blue">{props.color.value}</span></p>
            case 'Green':
                return <p><b>{props.color.name}:</b> <span className="green">{props.color.value}</span></p>
            case 'Yellow':
                return <p><b>{props.color.name}:</b> <span className="yellow">{props.color.value}</span></p>
            case 'Graphite':
                return <p><b>{props.color.name}:</b> <span className="graphite">{props.color.value}</span></p>
            case 'Copper':
                return <p><b>{props.color.name}:</b> <span className="copper">{props.color.value}</span></p>
            case 'Gold':
                return <p><b>{props.color.name}:</b> <span className="gold">{props.color.value}</span></p>
            default:
                return null
        }

    } else {
        return <p><b>{props.color.name}:</b> {props.color.value}</p>
    }
}
