import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import * as actionCreators from '../store/creators/actionCreators'
import axios from 'axios'

function Guest(props) {

    const navigate = useNavigate()

    useEffect(() => {
        handleGuestSignIn()
    })

    const handleGuestSignIn = async () => {
        const response = await axios.post('http://localhost:8080/user/guest')
        if (response.data.success) {
            const token = response.data.token
            localStorage.setItem('jwt', token)
            props.onSignIn(token)
            axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
            navigate('/')
        }
    }

    return null

}
const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: (token) => dispatch(actionCreators.signIn(token))
    }
}

export default connect(null, mapDispatchToProps)(Guest)
