import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
})

// Request interceptor
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const msg =
      error.response?.data?.message ||
      error.message ||
      'Erro inesperado. Tente novamente.'
    return Promise.reject(new Error(msg))
  }
)

/**
 * POST /api/matriculas
 * @param {{ nome: string, email: string, telefone: string, curso: string }} data
 */
export const enviarMatricula = (data) => api.post('/matriculas', data)

export default api
