export const handleUserEmail = (text) => {
  return {
    type: 'EMAIL',
    text
  }
}

export const handleUserPassword = (text) => {
  return {
    type: 'PASSWORD',
    text
  }
}

export const handleUserShow = (text) => {
    return {
    type: 'SHOW_USER',
    text
  }
}

export const submitFormAction = (formProps) => {
  return {
    type: 'FORM',
    formProps
  }

}

