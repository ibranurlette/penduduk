export const readToken = () => {
  return localStorage.getItem('token')
}

export const saveToken = (token) => {
  return localStorage.setItem('token', token)
}

export const removeToken = () => {
  localStorage.removeItem('token')
}

export const clearStorage = () => {
  return localStorage.clear()
}
