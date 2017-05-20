
export const handleEmail = (text) => {
  return {
    type: 'EMAIL',
    text
  }
}

export const handlePassword = (text) => {
  return {
    type: 'PASSWORD',
    text
  }
}

export const handleShow = (text) => {
    return {
    type: 'SHOW_LOGIN',
    text
  }
}
