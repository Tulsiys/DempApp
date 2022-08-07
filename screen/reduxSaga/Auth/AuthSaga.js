import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { AuthActionTypes } from './AuthAction';
import axios from 'axios';

function* fetchData() {
    console.log('fsfd')
    try{
        const res = yield call(() => axios.get('https://jsonplaceholder.typicode.com/posts'));
        console.log('SUCCESS ++++++++++', res);
        if(res && res.status){
            console.log('433434---',res);
            yield put({
                type: AuthActionTypes.FETCH_SUCCESS,
                payload: res,
            });
        }else{
            yield put({
                type: AuthActionTypes.FETCH_FAILURE,
                payload: res,
            });
        }
    } catch (e){
        console.log('ERROR +++++++++++++',e.response);
        yield put({
            type: AuthActionTypes.FETCH_FAILURE,
            payload: e
        });
    }
}

export function* fetchDataSaga() {
    console.log('676767')
    yield takeLatest(AuthActionTypes.FETCH_REQUEST, fetchData);
}