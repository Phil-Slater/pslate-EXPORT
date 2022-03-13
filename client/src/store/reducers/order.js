import GET_ORDER from '../actions/actionTypes'

const initialState = {
    order: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER:
            return {
                ...state,
                order: action.payload
            }
        default:
            return state
    }
}

export default reducer
