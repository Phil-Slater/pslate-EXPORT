
import * as actionTypes from '../actions/actionTypes'
import axios from 'axios'

export const getOrder = async (orderNumber) => {
    return (dispatch) => {
        const order = axios.get(`http:localhost:8080/${orderNumber}`)
        dispatch({
            type: actionTypes.GET_ORDER,
            payload: order
        })
    }
}
