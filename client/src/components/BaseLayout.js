
import Menu from "./Menu"
import { useLocation } from 'react-router-dom'

function BaseLayout(props) {

    const { pathname } = useLocation()
    // {pathname !== '/sign-up' ?   : null}
    return (
        <div>
            <Menu />
            {props.children}
        </div>
    )
}

export default BaseLayout
