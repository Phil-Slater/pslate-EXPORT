import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import * as actionCreators from '../store/creators/actionCreators'

function SignOut(props) {

    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem('jwt')
        props.onSignOut()
        navigate('/')
    })

    return null
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignOut: () => dispatch(actionCreators.signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignOut)
