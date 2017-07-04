import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import logger from 'redux-logger';
import reducers from '../reducers';

export default function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState, compose(applyMiddleware(logger)));
    return store;
};
