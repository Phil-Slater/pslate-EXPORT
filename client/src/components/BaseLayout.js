
import Menu from "./Menu"
// import { useLocation } from 'react-router-dom'

const BaseLayout = (props) => {

    // const { pathname } = useLocation()

    return (
        <div>
            <Menu />
            {props.children}
        </div>
    )
}

export default BaseLayout
