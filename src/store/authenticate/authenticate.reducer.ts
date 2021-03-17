import { createReducer } from 'typesafe-actions';
import { AuthenticateStoreModel } from '../../models/store/authenticate.model';
import {
  initSession,
  loginAction,
  logoutAction,
  testDelay,
} from './authenticate.action';

const initialState: AuthenticateStoreModel = {
  token: undefined,
  userInfo: undefined,
};

const authenticateReducer = createReducer<AuthenticateStoreModel>(initialState)
  .handleAction(loginAction.request, (state) => {
    return {
      ...state,
      loading: true,
    };
  })
  .handleAction(loginAction.success, (state, action) => {
    return {
      ...state,
      token: action.payload.token,
    };
  })
  .handleAction(initSession, (state, action) => {
    return {
      ...state,
      token: action.payload.token,
    };
  })
  .handleAction(logoutAction.success, (state) => {
    return {
      ...state,
      token: undefined,
    };
  })
  .handleAction([testDelay.success, testDelay.request], (state) => {
    return {
      ...state,
      userInfo: {
        name: String(+new Date()),
      },
    };
  });

export default authenticateReducer;
