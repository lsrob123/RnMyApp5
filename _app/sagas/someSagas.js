import {
    fork,
    cancel,
    call,
    put,
    race,
    take,
    takeLatest
} from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';
import * as actions from '../actions/actions';

function * someSaga() {
  while(true){
    const doThingAAction = yield take(actionTypes.doThings.doThingA);
    console.log(JSON.stringify(doThingAAction))

    const response = yield call(convertToDoThingBPayload, doThingAAction.payload);
    console.log(JSON.stringify(response))

    const newAction = actions.doThingB(response);
    console.log(JSON.stringify(newAction))
    yield put(newAction);
  }
}

function convertToDoThingBPayload(x) {
    var y = '[' + x + ' converted to doThingB payload]';
    return y;
}

export default function * someSagas() {
    yield [fork(someSaga)];
}
