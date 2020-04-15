import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';

export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN'
);
export const [
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
] = createRequestActionTypes('auth/SIGNUP');

export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}));
export const signUp = createAction(SIGNUP, ({ email, nickname, password }) => ({
  email,
  nickname,
  password,
}));

const initialState = {
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [LOGIN_SUCCESS]: (state, { payload: auth }) => {
      return {
        ...state,
        authError: null,
        auth,
      };
    },
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [SIGNUP_SUCCESS]: (state, { payload: auth }) => {
      return {
        ...state,
        authError: null,
        auth,
      };
    },
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);

export default auth;
