import { typesOfDevices } from '../Actions/fnDevices'

const initState = [{
  id: 0,
  uid: null,
  name: null,
  username: null,
  password: null,
  namespace: null,
  limit_measure: 0,
  app: {
    id: 0,
    name: null
  },
  blocked: false
}]

export default function devices(state = initState, action){
  switch (action.type){
    case typesOfDevices.LIST:
      return { ... state };
    case typesOfDevices.UPDATE:
      return { ... state };
    case typesOfDevices.DELETE:
      return { ... state};
    default:
      return state;
  }
}
