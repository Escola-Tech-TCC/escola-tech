import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Button from '../../components/Button/Button.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { modulosPorCurso, mentoriaSlots } from '../../services/mockData.js'
import {
  getProgresso,
  toggleAula,
  getReservas,
  reservarMentoria,
  cancelarReservaMentoria,
} from '../../services/progresso.js'
import styles from './AreaAluno.module.css'

export default function AreaAluno() {
  const { usuario, sair } = useAuth()
  const navigate = useNavigate()

  const [progresso, setProgresso] = useState(() => getProgresso(usuario.id))
  const [reservas, setReservas] = useState(() => getReservas())

  const modulos = modulosPorCurso[usuario.curso] || []

  const totalAulas = useMemo(
    () => modulos.reduce((acc, m) => acc + m.aulas.length, 0),
    [modulos]
  )
  const totalConcluidas = useMemo(
    () => Object.values(progresso).filter(Boolean).length,
    [progresso]
  )
  const percentualGeral = totalAulas > 0 ? Math.round((totalConcluidas / totalAulas) * 100) : 0

  const handleToggleAula = (aulaId) => {
    const atualizado = toggleAula(usuario.id, aulaId)
    setProgresso({ ...atualizado })
  }

  const minhasMentorias = mentoriaSlots.filter((slot) => (reservas[slot.id] || []).includes(usuario.id))

  const handleReservar = (slotId) => {
    const atualizado = reservarMentoria(usuario.id, slotId)
    setReservas({ ...atualizado })
  }

  const handleCancelar = (slotId) => {
    const atualizado = cancelarReservaMentoria(usuario.id, slotId)
    setReservas({ ...atualizado })
  }

  const handleSair = () => {
    sair()
    navigate('/')
  }

  const primeiroNome = usuario.nome.split(' ')[0]

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <div className={`${styles.inner} container`}>
          {/* Header */}
          <div className={styles.top}>
            <div>
              <h1 className={styles.title}>Olá, {primeiroNome} 👋</h1>
              <p className={styles.sub}>
                Curso: <strong>{usuario.curso}</strong>
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={handleSair}>
              Sair
            </Button>
          </div>

          {/* Progress summary */}
          <div className={styles.summaryCard}>
            <div className={styles.summaryText}>
              <span className={styles.summaryLabel}>Progresso geral</span>
              <span className={styles.summaryValue}>
                {totalConcluidas}/{totalAulas} aulas concluídas
              </span>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${percentualGeral}%` }} />
            </div>
            <span className={styles.summaryPercent}>{percentualGeral}%</span>
          </div>

          {/* Matérias */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>📚 Minhas Matérias</h2>

            {modulos.length === 0 ? (
              <p className={styles.empty}>Ainda não há módulos cadastrados para o seu curso.</p>
            ) : (
              <div className={styles.modulosGrid}>
                {modulos.map((modulo) => {
                  const concluidasModulo = modulo.aulas.filter((a) => progresso[a.id]).length
                  const percentualModulo = Math.round((concluidasModulo / modulo.aulas.length) * 100)

                  return (
                    <div key={modulo.id} className={styles.moduloCard}>
                      <div className={styles.moduloHeader}>
                        <h3 className={styles.moduloTitulo}>{modulo.titulo}</h3>
                        <span className={styles.moduloPercent}>{percentualModulo}%</span>
                      </div>
                      <div className={styles.progressBarSm}>
                        <div className={styles.progressFillSm} style={{ width: `${percentualModulo}%` }} />
                      </div>
                      <ul className={styles.aulasList}>
                        {modulo.aulas.map((aula) => (
                          <li key={aula.id} className={styles.aulaItem}>
                            <label className={styles.aulaLabel}>
                              <input
                                type="checkbox"
                                checked={!!progresso[aula.id]}
                                onChange={() => handleToggleAula(aula.id)}
                                className={styles.checkbox}
                              />
                              <span className={progresso[aula.id] ? styles.aulaConcluida : ''}>
                                {aula.titulo}
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            )}
          </section>

          {/* Mentoria */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>🤝 Mentoria</h2>
            <p className={styles.sectionSub}>Reserve um horário com um mentor para tirar dúvidas e evoluir na carreira.</p>

            {minhasMentorias.length > 0 && (
              <div className={styles.minhasMentorias}>
                <span className={styles.minhasMentoriasLabel}>Suas mentorias agendadas:</span>
                <ul className={styles.minhasMentoriasList}>
                  {minhasMentorias.map((slot) => (
                    <li key={slot.id}>
                      {slot.data} às {slot.hora} — {slot.tema} (com {slot.mentor})
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.mentoriaGrid}>
              {mentoriaSlots.map((slot) => {
                const reservados = reservas[slot.id] || []
                const vagasRestantes = slot.vagas - reservados.length
                const jaReservei = reservados.includes(usuario.id)
                const esgotado = vagasRestantes <= 0 && !jaReservei

                return (
                  <div key={slot.id} className={styles.mentoriaCard}>
                    <div className={styles.mentoriaHeader}>
                      <span className={styles.mentoriaData}>{slot.data} · {slot.hora}</span>
                      <span className={jaReservei ? styles.badgeReservado : styles.badgeVagas}>
                        {jaReservei ? 'Reservado' : `${vagasRestantes} vaga(s)`}
                      </span>
                    </div>
                    <h3 className={styles.mentoriaTema}>{slot.tema}</h3>
                    <p className={styles.mentoriaMentor}>com {slot.mentor}</p>

                    {jaReservei ? (
                      <Button variant="ghost" size="sm" className={styles.mentoriaBtn} onClick={() => handleCancelar(slot.id)}>
                        Cancelar reserva
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className={styles.mentoriaBtn}
                        disabled={esgotado}
                        onClick={() => handleReservar(slot.id)}
                      >
                        {esgotado ? 'Sem vagas' : 'Reservar horário'}
                      </Button>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
