// Autenticação simulada no navegador (sem backend real).
// As "senhas" passam por uma ofuscação simples (base64) só para não ficarem
// em texto puro no localStorage — isso NÃO é criptografia segura e não deve
// ser usado como referência para um sistema de login em produção.

const USERS_KEY = 'et_users'
const SESSION_KEY = 'et_session_email'

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function ofuscarSenha(senha) {
  return btoa(unescape(encodeURIComponent(senha)))
}

function sanitize(user) {
  if (!user) return null
  const { senha, ...rest } = user
  return rest
}

export function registrar({ nome, email, senha, curso }) {
  const users = readUsers()
  const emailNormalizado = email.trim().toLowerCase()

  if (users.some((u) => u.email === emailNormalizado)) {
    throw new Error('Já existe uma conta cadastrada com esse e-mail.')
  }

  const novoUsuario = {
    id: (crypto.randomUUID && crypto.randomUUID()) || `u_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    nome: nome.trim(),
    email: emailNormalizado,
    senha: ofuscarSenha(senha),
    curso,
    criadoEm: new Date().toISOString(),
  }

  writeUsers([...users, novoUsuario])
  localStorage.setItem(SESSION_KEY, novoUsuario.email)
  return sanitize(novoUsuario)
}

export function login({ email, senha }) {
  const users = readUsers()
  const emailNormalizado = email.trim().toLowerCase()
  const user = users.find((u) => u.email === emailNormalizado)

  if (!user || user.senha !== ofuscarSenha(senha)) {
    throw new Error('E-mail ou senha incorretos.')
  }

  localStorage.setItem(SESSION_KEY, user.email)
  return sanitize(user)
}

export function logout() {
  localStorage.removeItem(SESSION_KEY)
}

export function getUsuarioAtual() {
  const email = localStorage.getItem(SESSION_KEY)
  if (!email) return null
  const user = readUsers().find((u) => u.email === email)
  return sanitize(user)
}
