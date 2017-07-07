import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import {persistStore, autoRehydrate} from 'redux-persist';
import logger from 'redux-logger';
import reducers from '../reducers/combineReducers';
import combineSagas from '../sagas/combineSagas';

export default function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, initialState, compose(applyMiddleware(sagaMiddleware, logger)));

    sagaMiddleware.run(combineSagas);

    store.close = () => store.dispatch(END);
    return store;
};
