import { fork, all } from '@redux-saga/core/effects';
import authenticateSaga from './authenticate/authenticate.saga';

export default function* rootSaga() {
  try {
    yield all([fork(authenticateSaga)]);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}
