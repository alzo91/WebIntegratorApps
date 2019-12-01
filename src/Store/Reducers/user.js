import { typeOfLogins } from '../Actions/fnLogin'

const initState = {
  name: null,
  email: null,
  manager: false,
  loading:false,
  error: null
}

export default function user(state = initState, action){
  switch (action.type){
    case typeOfLogins.LOGIN:
      return { ... state }

    case typeOfLogins.PROCESS:
      return {
        ... state,
        loading: action.payload.boolRet,
        error: action.payload.strMsg
      }

    case typeOfLogins.SINGUP:
      return { ... state };

    case typeOfLogins.LOGOUT:
      return state;

    default:
      return state;
  }
}
