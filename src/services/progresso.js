// Progresso do aluno nas aulas e reservas de mentoria, persistidos no navegador.

const PROGRESSO_PREFIX = 'et_progresso_'
const RESERVAS_KEY = 'et_mentoria_reservas'

export function getProgresso(userId) {
  try {
    return JSON.parse(localStorage.getItem(PROGRESSO_PREFIX + userId)) || {}
  } catch {
    return {}
  }
}

export function toggleAula(userId, aulaId) {
  const progresso = getProgresso(userId)
  progresso[aulaId] = !progresso[aulaId]
  localStorage.setItem(PROGRESSO_PREFIX + userId, JSON.stringify(progresso))
  return progresso
}

export function getReservas() {
  try {
    return JSON.parse(localStorage.getItem(RESERVAS_KEY)) || {}
  } catch {
    return {}
  }
}

export function reservarMentoria(userId, slotId) {
  const reservas = getReservas()
  const lista = reservas[slotId] || []
  if (!lista.includes(userId)) {
    reservas[slotId] = [...lista, userId]
    localStorage.setItem(RESERVAS_KEY, JSON.stringify(reservas))
  }
  return reservas
}

export function cancelarReservaMentoria(userId, slotId) {
  const reservas = getReservas()
  reservas[slotId] = (reservas[slotId] || []).filter((id) => id !== userId)
  localStorage.setItem(RESERVAS_KEY, JSON.stringify(reservas))
  return reservas
}
