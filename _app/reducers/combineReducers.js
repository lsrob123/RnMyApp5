import {applyMiddleware, combineReducers, createStore} from 'redux';
import doThingsReducer from './doThingsReducer';
import loginReducer from './loginReducer';

//global state = { info: info, info2}
export default combineReducers({doThingsReducer, loginReducer});
