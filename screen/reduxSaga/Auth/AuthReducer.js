import { AuthActionTypes } from "./AuthAction"

const initialState = {
    fetchSuccess: undefined,
    fetchError: undefined,
}

const fetchReducer = (state = initialState, action) => {

    console.log('REDUCER_EXECUTE', action)

    switch (action.type) {
        case AuthActionTypes.FETCH_SUCCESS:
            console.log('SUCCESS_REDUCER')
            return {
                ...state,
                fetchSuccess: action.payload,
                fetchError: undefined,
            };

        case AuthActionTypes.FETCH_FAILURE:
            console.log('FAILURE_REDUCER')
            return {
                ...state,
                fetchSuccess: undefined,
                fetchError: action.payload,
            };
        default:
            return state;
    }

};

export default fetchReducer;