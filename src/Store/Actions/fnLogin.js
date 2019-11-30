export const typeOfLogins = {
  LOGIN: "LOGIN",
  SINGUP: "SINGUP",
  LOGOUT: "LOGOUT",
}

export const doLogin = (email, password) => {
  return {
    type: typeOfLogins.LOGIN,
    payload: { email, password}
  }
}

export const doSingup = (email, conf_mail, password) => {
  return {
    type: typeOfLogins.SINGUP,
     payload: { email, conf_mail, password}
  }
}

export const doLogout = boolExit => {
  return {
    type: typeOfLogins.LOGOUT,
     payload: { exit: boolExit}
  }
}
