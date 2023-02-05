
import * as actionTypes from '../actions/actionTypes'
// import axios from 'axios'

// export const getOrder = (orderNumber) => {
//     return async (dispatch) => {
//         const order = await axios.get(`http://localhost:8080/order/${orderNumber}`)
//         dispatch({
//             type: actionTypes.GET_ORDER,
//             payload: order.data
//         })
//     }
// }

export const signIn = (token) => {
    return {
        type: actionTypes.ON_AUTH,
        payload: token
    }
}

export const signOut = () => {
    return {
        type: actionTypes.ON_AUTH,
        payload: null
    }
}

export const requestSent = () => {
    return {
        type: actionTypes.REQUEST_SENT
    }
}

export const responseRecieved = () => {
    return {
        type: actionTypes.RESPONSE_RECEIVED
    }
}
