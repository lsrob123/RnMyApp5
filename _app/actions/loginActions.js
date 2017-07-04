import actionTypes from './actionTypes';

export const setLoginState = x => ({type: actionTypes.login.setLoginState, isLoggedIn: x});
