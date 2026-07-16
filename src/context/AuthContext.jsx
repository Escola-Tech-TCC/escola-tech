import { createContext, useCallback, useContext, useState } from 'react'
import * as authService from '../services/auth.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => authService.getUsuarioAtual())

  const entrar = useCallback((credenciais) => {
    const user = authService.login(credenciais)
    setUsuario(user)
    return user
  }, [])

  const cadastrar = useCallback((dados) => {
    const user = authService.registrar(dados)
    setUsuario(user)
    return user
  }, [])

  const sair = useCallback(() => {
    authService.logout()
    setUsuario(null)
  }, [])

  return (
    <AuthContext.Provider value={{ usuario, entrar, cadastrar, sair }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth precisa ser usado dentro de <AuthProvider>')
  }
  return ctx
}
