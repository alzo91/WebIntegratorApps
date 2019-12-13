export const typeOfLogins = {
  LOGIN: 'LOGIN',
  SINGUP: 'SINGUP',
  LOGOUT: 'LOGOUT',
  PROCESS: 'PROCCESS_REQUEST',
  CHK_TOKEN: 'CHK_TOKEN',
};

export const doProccess = (boolRet, strMsg, type_error) => {
  return {
    type: typeOfLogins.PROCESS,
    payload: { boolRet, strMsg, type_error },
  };
};

export const doLogin = (email, password) => {
  return {
    type: typeOfLogins.LOGIN,
    payload: { email, password },
  };
};

export const doSingup = (name, email, conf_mail, password, verify_access) => {
  return {
    type: typeOfLogins.SINGUP,
    payload: { name, email, conf_mail, password, verify_access },
  };
};

export const doCheckToken = token => {
  return {
    type: typeOfLogins.CHK_TOKEN,
    payload: { token },
  };
};

export const doLogout = boolExit => {
  return {
    type: typeOfLogins.LOGOUT,
    payload: { exit: boolExit },
  };
};
