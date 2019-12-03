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
    // console.log('vamos fazer o processo de cadastro!');
    // yield delay(1000);
    const objEnv = { ...action.payload, manager: false };
    console.log(`obj Envio: ${JSON.stringify(objEnv)}`);

    const response = yield call(api.post, '/CreateUser', objEnv, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '*/*' },
    });

    // api.post('', objEnv, { method: 'POST',  });
    console.log(`response: ${JSON.stringify(response.data)}`);
    yield put(LoginActions.doProccess(false, 'User was resgistryied !', 1));
  } catch (err) {
    console.error(err);
    yield put(LoginActions.doProccess(false, "User wasn't resgistry!", 3));
  }
}

export function* singinUser(action) {
  try {
    yield put(LoginActions.doProccess(true, null));
    console.log('vamos fazer o processo de login no sistema');
    yield delay(1000);
    console.log(`valor payload: ${JSON.stringify(action.payload)}`);
    yield put(LoginActions.doProccess(false, null));
  } catch (err) {
    console.error(err);
  }
}
