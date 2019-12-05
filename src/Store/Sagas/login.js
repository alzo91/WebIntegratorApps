import { call, put, delay } from 'redux-saga/effects';

import * as LoginActions from '../Actions/fnLogin';

import api from '../../services/api';
/**
 * typeError
 *  0- valor inicial | 1- info | 2- warning | 3-error
 * */

export function* registryUser(action) {
  try {
    yield put(LoginActions.doProccess(true, null, 0));

    const objEnv = { ...action.payload, manager: false };
    const response = yield call(api.post, '/CreateUser', objEnv);

    yield delay(4000);
    console.log(`response: ${JSON.stringify(response.data)}`);

    yield put(LoginActions.doProccess(false, 'User was resgistryied !', 1));
  } catch (err) {
    console.error(err);
    yield put(LoginActions.doProccess(false, "User wasn't resgistry!", 3));
  }
}

export function* singinUser(action) {
  try {
    yield put(LoginActions.doProccess(true, null, 0));

    const response = yield call(api.post, '/CreateSession', action.payload);

    yield delay(4000);

    localStorage.setItem('@integrator:token_app', response.data.token_app);

    yield put(LoginActions.doProccess(false, 'User logged !', 1));
  } catch (err) {
    console.error(err);
    yield put(LoginActions.doProccess(false, "User wasn't resgistry!", 3));
  }
}
