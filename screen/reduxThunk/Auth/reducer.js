export const FETCH_LOADING = "Fetch_Loading";
export const FETCH_SUCCESS = "Fetch_Success";
export const FETCH_ERROR = 'Fetch_Error';

const initialState = {
    fetchSuccess: null,
    fetchLoading: false,
    fetchError: null
}

export default function fetchReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LOADING:
            return {
                ...state,
                fetchLoading: true,
                fetchSuccess: null,
                fetchError: null
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                fetchLoading: false,
                fetchSuccess: action.data,
                fetchError: null
            };
        case FETCH_ERROR:
            return {
                ...state,
                fetchLoading: false,
                fetchError: action.data,
                fetchSuccess: null
            }
        default:
            return state;

    }

}