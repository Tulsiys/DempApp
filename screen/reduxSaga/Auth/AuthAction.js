export const AuthActionTypes = {

    FETCH_REQUEST: 'FETCH_REQUEST',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE'

};

const fetchAction = (payload) => {
    console.log('EXECUTE')
    return { type: AuthActionTypes.FETCH_REQUEST, payload };
};

export default fetchAction;