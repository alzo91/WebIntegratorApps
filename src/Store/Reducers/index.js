import { combineReducers } from 'redux'

import user from './user'
import devices from './devices'

export default combineReducers({ user, devices })
