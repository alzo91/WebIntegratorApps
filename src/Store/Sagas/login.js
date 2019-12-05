import { call, put, delay } from 'redux-saga/effects';

import * as LoginActions from '../Actions/fnLogin';
import history from '../../services/history';
import api from '../../services/api';

/**
 * typeError
 * 3th parameter in doProccess
 *  0- valor inicial | 1- info | 2- warning | 3-error
 * */

export function* registryUser(action) {
  try {
    yield put(LoginActions.doProccess(true, null, 0));

    const objEnv = { ...action.payload, manager: false };
    const response = yield call(api.post, '/CreateUser', objEnv);

    yield delay(2000);
    // console.log(`response: ${JSON.stringify(response.data)}`);

    yield put(LoginActions.doProccess(false, 'User was resgistryied !', 1));

    // yield delay(2000);
    history.goBack();
  } catch (err) {
    let [, sts] = err.message.split('code ');
    sts = !sts ? 500 : +sts;

    let errorMsg = `Status:${sts}, user wasn't resgistry!`;
    if (err.error) {
      errorMsg = err.error;
    }

    yield put(LoginActions.doProccess(false, errorMsg, 3));
  }
}

export function* singinUser(action) {
  try {
    yield put(LoginActions.doProccess(true, null, 0));

    const response = yield call(api.post, '/CreateSession', action.payload);
    console.log(response.data);
    yield delay(2000);

    localStorage.setItem('@integrator:token_app', response.data.token_app);

    yield put(LoginActions.doProccess(false, 'User logged !', 1));

    // yield delay(2000);

    // yield call(history.push, '/Dashboard');
    // history.push('Dashboard');
    // history.go();
  } catch (err) {
    console.error(err);
    yield put(LoginActions.doProccess(false, "User wasn't resgistry!", 3));
  }
}
