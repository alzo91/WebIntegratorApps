import { call, put } from 'redux-saga/effects'

import api from '../../services/api'

export function* registryUser(action){
  try{
    console.log('vamos fazer o processo de cadastro!')
  } catch(err){
    console.error(err)
  }
}

export function* singinUser(action){
  try{
    console.log('vamos fazer o processo de login no sistema')
  }catch(err){
    console.error(err)
  }
}
