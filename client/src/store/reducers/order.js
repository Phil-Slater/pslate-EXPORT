import * as actionTypes from '../actions/actionTypes'

const initialState = {
    order: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ORDER:
            return {
                ...state,
                order: action.payload
            }
        default:
            return state
    }
}

export default reducer
