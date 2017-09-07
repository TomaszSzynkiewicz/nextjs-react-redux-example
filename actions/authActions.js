export const SIGN_IN_REQUESTED = 'SIGN_IN_REQUESTED';
export const SIGN_IN_DONE = 'SIGN_IN_DONE';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';
export const CHECK_TOKEN = 'CHECK_TOKEN';
export const SIGN_OUT = 'SIGN_OUT';

export function signInRequested(formData) {
  return {
    type: SIGN_IN_REQUESTED,
    payload: formData
  };
}

export function signInDone(data) {
  return {
    type: SIGN_IN_DONE,
    payload: data
  };
}

export function signInFailed(error) {
  return {
    type: SIGN_IN_FAILED,
    payload: error
  };
}

export function checkToken() {
  return {
    type: CHECK_TOKEN
  };
}

export function signOut() {
  return {
    type: SIGN_OUT
  };
}
