import {
  takeLatest,
  put
} from 'redux-saga/effects';
import es6promise from 'es6-promise';

import API from '../api';

import {
  SIGN_IN_REQUESTED,
  signInDone,
  signInFailed,
  CHECK_TOKEN,
  SIGN_OUT
} from '../actions';

es6promise.polyfill();

function* signIn({ payload: { email, password, rememberMe } }) {
  try {
    const res = yield API.post({ email, password });
    if (rememberMe) {
      // should be token but since we only have mocked and for
      // the sake of simplicity I use my email as a token
      window.localStorage.setItem('token', email);
    }
    yield put(signInDone(res));
  } catch (err) {
    yield put(signInFailed(err));
  }
}

function* checkToken() {
  const token = window.localStorage.getItem('token');
  if (token) {
    // in real world scenario this would be the place to send the token to 
    // BE to confirm that it's valid. Let's assume that this is what I did.
    yield put(signInDone({ email: token }));
  }
}

function* signOut() {
  yield window.localStorage.removeItem('token');
}

export default [
  takeLatest(SIGN_IN_REQUESTED, signIn),
  takeLatest(CHECK_TOKEN, checkToken),
  takeLatest(SIGN_OUT, signOut)
];
