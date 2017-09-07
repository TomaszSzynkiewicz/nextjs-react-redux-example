import {
  SIGN_IN_REQUESTED,
  SIGN_IN_DONE,
  SIGN_IN_FAILED,
  SIGN_OUT
} from '../actions';

const INITIAL_STATE = {
  loading: false,
  authenticated: false,
  message: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_REQUESTED:
      return { ...state, loading: true, message: '' };
    case SIGN_IN_DONE:
      return { ...state, loading: false, authenticated: true, message: action.payload.message, user: action.payload.email };
    case SIGN_IN_FAILED:
      return { ...state, loading: false, authenticated: false, message: action.payload.message || '', user: null };
    case SIGN_OUT:
      return { ...state, loading: false, authenticated: false, user: null };
    default:
      return state;
  }
};
