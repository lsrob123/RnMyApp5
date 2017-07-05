import actionTypes from '../actions/actionTypes';

const doThingsActions = actionTypes.doThings;

// accepts actions and then updates the partitioned state
export default doThingsReducer = (reducer = {
    info: 'Initial info'
}, action) => {
    switch (action.type) {
        case doThingsActions.doThingA:
            console.log('doThingsReducer.doThingA: ' + JSON.stringify(action.payload));
            return {
                ...reducer,
                info: 'From A: ' + action.payload
            };
        case doThingsActions.doThingB:
            console.log('doThingsReducer.doThingB: ' + JSON.stringify(action.payload));
            return {
                ...reducer,
                info: 'From B: ' + action.payload
            };
        default:
            return reducer;
    }
};