import { createStore,combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchReducer from './Auth/reducer';

const rootReducer = combineReducers({
    fetchReducer : fetchReducer
})

const thunkstore = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default thunkstore;