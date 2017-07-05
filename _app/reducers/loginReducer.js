import actionTypes from '../actions/actionTypes';

const loginActions = actionTypes.login;

// accepts actions and then updates the partitioned state
export default loginReducer = (reducer = {
    isLoggedIn: false
}, action) => {
    switch (action.type) {
        case loginActions.setLoginState:
            console.log('loginReducer.setLoginState: ' + JSON.stringify(action.payload));
            return {
                ...reducer,
                isLoggedIn: action.isLoggedIn
            };
        default:
            return reducer;
    }
};