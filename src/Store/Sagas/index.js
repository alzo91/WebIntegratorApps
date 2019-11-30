// import { all, takeLatest, call } from 'redux-saga/effects'
import { all, takeLatest } from 'redux-saga/effects'
import { typeOfLogins } from '../Actions/fnLogin'

import { registryUser, singinUser } from './login'

export default function* rootSaga(){
  return yield all([
    //call(wa) // para usar o call com watching olhar .exemplo
    takeLatest(typeOfLogins.LOGIN, singinUser),
    takeLatest(typeOfLogins.SINGUP,registryUser),
  ])
}
