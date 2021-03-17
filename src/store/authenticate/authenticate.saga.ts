import { delay, put, takeLeading } from '@redux-saga/core/effects';
import { loginAction, logoutAction, testDelay } from './authenticate.action';

function* handleLogin(action: ReturnType<typeof loginAction.request>) {
  try {
    yield delay(4000);
    const token = 'test_token12312312';
    yield put(loginAction.success({ token }));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

function* handleLogout() {
  try {
    yield put(logoutAction.success());
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export default function* authenticateSaga() {
  yield takeLeading(loginAction.request, handleLogin);
  yield takeLeading(logoutAction.request, handleLogout);
  yield takeLeading(testDelay.request, function* handleRequest() {
    yield delay(2000);
    yield put(testDelay.success());
  });
}
