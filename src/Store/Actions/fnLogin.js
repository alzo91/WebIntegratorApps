export const typeOfLogins = {
  LOGIN: 'LOGIN',
  SINGUP: 'SINGUP',
  LOGOUT: 'LOGOUT',
  PROCESS: 'PROCCESS_REQUEST',
};

export const doProccess = (boolRet, strMsg) => {
  return {
    type: typeOfLogins.PROCESS,
    payload: { boolRet, strMsg },
  };
};

export const doLogin = (email, password) => {
  return {
    type: typeOfLogins.LOGIN,
    payload: { email, password },
  };
};

export const doSingup = (email, conf_mail, password, chkManager) => {
  return {
    type: typeOfLogins.SINGUP,
    payload: { email, conf_mail, password, chkManager },
  };
};

export const doLogout = boolExit => {
  return {
    type: typeOfLogins.LOGOUT,
    payload: { exit: boolExit },
  };
};
