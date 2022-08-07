import {all} from 'redux-saga/effects';
import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { AuthActionTypes } from './Auth/AuthAction';
import fetchReducer from './Auth/AuthReducer';
import { fetchDataSaga } from './Auth/AuthSaga';


export const rootReducer = combineReducers({
    fetch:fetchReducer,
});

export function* rootSaga() {
    yield all([
        fetchDataSaga(),
    ])
}

///---For logout when user click on logout button on that time the function will call

const appReducer = (state,action) => {
    if(action.type === AuthActionTypes.LOG_OUT){
        state = undefined;
    }
    return rootReducer(state, action);
}

const sagaMiddlwWare = createSagaMiddleware()


const sagastore = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddlwWare),)
);

//then run the saga
sagaMiddlwWare.run(rootSaga);

export default sagastore;