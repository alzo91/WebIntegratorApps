import { typeOfLogins } from '../Actions/fnLogin'

const initState = {
  name: null,
  email: null,
  manager: false,
}

export default function user(state = initState, action){
  switch (action.type){
    case typeOfLogins.LOGIN:
      return { ... state }
    case typeOfLogins.SINGUP:
      return { ... state };
    case typeOfLogins.LOGOUT:
      return state;
    default:
      return state;
  }
}
