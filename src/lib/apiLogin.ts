import axios from 'axios'
import Cookies from 'js-cookie'

const apiLogin = axios.create({
  baseURL: 'https://sandbox-be.helipagos.com/api',
  headers: { 'Content-Type': 'application/json' }
})

// Interceptor para agregar el token a cada solicitud
apiLogin.interceptors.request.use((config) => {
  const token = Cookies.get('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default apiLogin
