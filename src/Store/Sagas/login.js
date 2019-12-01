import { call, put, delay } from 'redux-saga/effects'

import * as LoginActions from '../Actions/fnLogin';

import api from '../../services/api'

export function* registryUser(action){
  try{
    yield put(LoginActions.doProccess(true,null));
    console.log('vamos fazer o processo de cadastro!');
    yield delay(1000);
    console.log(`valor payload: ${JSON.stringify(action.payload)}`);
    yield put(LoginActions.doProccess(false,null));
  } catch(err){
    console.error(err)
  }
}

export function* singinUser(action){
  try{
    yield put(LoginActions.doProccess(true,null));
    console.log('vamos fazer o processo de login no sistema');
    yield delay(1000);
    console.log(`valor payload: ${JSON.stringify(action.payload)}`);
    yield put(LoginActions.doProccess(false,null));
  }catch(err){
    console.error(err)
  }
}
