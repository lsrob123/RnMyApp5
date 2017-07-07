import { fork } from 'redux-saga/effects';
import someSagas from './someSagas';

export default function* combineSagas() {
  yield [
    fork(someSagas)
  ];
}

