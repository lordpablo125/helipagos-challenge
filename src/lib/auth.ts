import Cookies from 'js-cookie'
import apiLogin from './apiLogin'

export const login = async (username: string, password: string) => {
  try {
    const response = await apiLogin.post('/auth/login', { username, password })
    const { token } = response.data

    if (token) {
      Cookies.set('authToken', token, { expires: 1 }) // Expira en 1 día
    }

    return response.data
  } catch (error) {
    throw new Error('Error en el login')
  }
}

export const logout = () => {
  Cookies.remove('authToken')
}

export const getToken = () => {
  return Cookies.get('authToken')
}
