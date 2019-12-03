import { typeOfLogins } from '../Actions/fnLogin';

const initState = {
  name: null,
  email: null,
  manager: false,
  loading: false,
  error: null,
  typeError: 0 /** 0- valor inicial | 1- info | 2- warning | 3-error */,
};

export default function user(state = initState, action) {
  switch (action.type) {
    case typeOfLogins.LOGIN:
      return { ...state };

    case typeOfLogins.PROCESS:
      return {
        ...state,
        loading: action.payload.boolRet,
        error: action.payload.strMsg,
        type_error: action.payload.type_error,
      };

    case typeOfLogins.SINGUP:
      return { ...state };

    case typeOfLogins.LOGOUT:
      return state;

    default:
      return state;
  }
}
