import actionTypes from '../actions/actionTypes';

const doThingsActions = actionTypes.doThings;

// accepts actions and then updates the partitioned state
export default doThingsReducer = (reducer = {
    info: {}
}, action) => {
    console.log('doThingsReducer state: ' + reducer);
    console.log('doThingsReducer action: ' + action);
    switch (action.type) {
        case doThingsActions.doThingA:
            return {
                ...reducer,
                info: 'From A: ' + action.payload
            };
        case doThingsActions.doThingB:
            return {
                ...reducer,
                info: 'From B: ' + action.payload
            };
        default:
            return reducer;
    }
};