import { createAction, createAsyncAction } from 'typesafe-actions';

interface LoginPayload {
  username: string;
  password: string;
}

interface LoginSuccessPayload {
  token: string;
}

export const loginAction = createAsyncAction(
  'LOGIN',
  'LOGIN_SUCCESS',
  'LOGIN_FAIL',
)<LoginPayload, LoginSuccessPayload, string>();

export const logoutAction = createAsyncAction(
  'LOG_OUT',
  'LOG_OUT_SUCCESS',
  'LOG_OUT_FAIL',
)<void, void, void>();

export const testDelay = createAsyncAction('test', 'testsuccess', 'testerror')<
  void,
  void,
  void
>();

export const initSession = createAction('INIT_SESSION')<{ token: string }>();
