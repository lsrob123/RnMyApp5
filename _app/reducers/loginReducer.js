import actionTypes from '../actions/actionTypes';

const loginActions = actionTypes.login;

// accepts actions and then updates the partitioned state
export default loginReducer = (reducer = {
    isLoggedIn: false
}, action) => {
    console.log('loginReducer state: ' + reducer);
    console.log('loginReducer action: ' + action);
    switch (action.type) {
        case loginActions.setLoginState:
            return {
                ...reducer,
                isLoggedIn: action.isLoggedIn
            };
        default:
            return reducer;
    }
};