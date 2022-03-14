
import Menu from "./Menu"
import { useLocation } from 'react-router-dom'

function BaseLayout(props) {

    const { pathname } = useLocation()

    return (
        <div>
            {pathname !== '/sign-up' ? <Menu /> : null}
            {props.children}
        </div>
    )
}

export default BaseLayout
