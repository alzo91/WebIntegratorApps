export const typesOfDevices = {
  LIST: "LIST",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
}

export const doList = loading => {
  return {
    type: typesOfDevices.LIST,
    payload: { loading }
  }
}
