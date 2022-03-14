import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isAuthenticated: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ON_AUTH:
            return {
                ...state,
                isAuthenticated: action.payload != null
            }
        default:
            return state
    }
}

export default reducer
