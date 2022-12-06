
import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware, compose, createStore} from 'redux';
import reducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../sagas';

const configureStore=()=>{
    const sagaMiddleWare = createSagaMiddleware();
    const middlewares = [sagaMiddleWare];
    const enhancer = process.NODE_ENV ==='production'
    ?compose(applyMiddleware(sagaMiddleWare))
    :composeWithDevTools(applyMiddleware(...middlewares))
    const store=createStore(reducer,enhancer);
    store.sagaTask = sagaMiddleWare.run(rootSaga);
    return store;
};

const wrapper = createWrapper(
    configureStore,
    {debug:process.env.NODE_ENV ==='development'}
    );

export default wrapper;