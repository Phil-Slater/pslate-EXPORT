import * as actionTypes from '../actions/actionTypes';

const initialState = {
    order: {},
    isLoading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ORDER:
            return {
                ...state,
                order: action.payload
            };
        case actionTypes.REQUEST_SENT:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.RESPONSE_RECEIVED:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state
    }
};

export default reducer;
