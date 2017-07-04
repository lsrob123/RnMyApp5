import {applyMiddleware, combineReducers, createStore} from 'redux';
import doThingsReducer from './doThingsReducer';
import loginReducer from './loginReducer';

export default combineReducers({doThingsReducer, loginReducer});
