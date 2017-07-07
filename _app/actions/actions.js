import actionTypes from './actionTypes';

export const doThingA = x => ({type: actionTypes.doThings.doThingA, payload: x});

export const doThingB = x => ({type: actionTypes.doThings.doThingB, payload: x});

export const setLoginState = x => ({type: actionTypes.login.setLoginState, isLoggedIn: x});
