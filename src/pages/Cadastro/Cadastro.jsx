import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Button from '../../components/Button/Button.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { cursos } from '../../services/mockData.js'
import styles from '../Login/Login.module.css'

const INITIAL_STATE = { nome: '', email: '', senha: '', confirmarSenha: '', curso: '' }

function validate(values) {
  const errors = {}
  if (!values.nome.trim() || values.nome.trim().length < 3) {
    errors.nome = 'Informe seu nome completo.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Informe um e-mail válido.'
  }
  if (values.senha.length < 6) {
    errors.senha = 'A senha deve ter pelo menos 6 caracteres.'
  }
  if (values.confirmarSenha !== values.senha) {
    errors.confirmarSenha = 'As senhas não coincidem.'
  }
  if (!values.curso) {
    errors.curso = 'Selecione o curso em que você está matriculado.'
  }
  return errors
}

export default function Cadastro() {
  const { cadastrar } = useAuth()
  const navigate = useNavigate()

  const [values, setValues] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [apiError, setApiError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (apiError) setApiError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setLoading(true)
    try {
      cadastrar(values)
      navigate('/area-do-aluno', { replace: true })
    } catch (err) {
      setApiError(err.message || 'Não foi possível criar sua conta. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <div className={`${styles.inner} container`}>
          <div className={styles.card}>
            <div className={styles.header}>
              <h1 className={styles.title}>Criar conta de aluno</h1>
              <p className={styles.sub}>Cadastre-se para acessar suas matérias e agendar mentorias.</p>
            </div>

            {apiError && (
              <div className={styles.apiError} role="alert">
                ⚠ {apiError}
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.field}>
                <label htmlFor="nome" className={styles.label}>Nome completo</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  autoComplete="name"
                  placeholder="Ex: Ana Clara Ferreira"
                  value={values.nome}
                  onChange={handleChange}
                  className={styles.input}
                  aria-invalid={!!errors.nome}
                />
                {errors.nome && <span role="alert" style={{ fontSize: '0.78rem', color: 'var(--color-error)' }}>{errors.nome}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="seu@email.com"
                  value={values.email}
                  onChange={handleChange}
                  className={styles.input}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span role="alert" style={{ fontSize: '0.78rem', color: 'var(--color-error)' }}>{errors.email}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="curso" className={styles.label}>Curso matriculado</label>
                <select
                  id="curso"
                  name="curso"
                  value={values.curso}
                  onChange={handleChange}
                  className={styles.input}
                  aria-invalid={!!errors.curso}
                >
                  <option value="" disabled>Selecione um curso…</option>
                  {cursos.map((c) => (
                    <option key={c.id} value={c.titulo}>{c.titulo}</option>
                  ))}
                </select>
                {errors.curso && <span role="alert" style={{ fontSize: '0.78rem', color: 'var(--color-error)' }}>{errors.curso}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="senha" className={styles.label}>Senha</label>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Mínimo 6 caracteres"
                  value={values.senha}
                  onChange={handleChange}
                  className={styles.input}
                  aria-invalid={!!errors.senha}
                />
                {errors.senha && <span role="alert" style={{ fontSize: '0.78rem', color: 'var(--color-error)' }}>{errors.senha}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="confirmarSenha" className={styles.label}>Confirmar senha</label>
                <input
                  id="confirmarSenha"
                  name="confirmarSenha"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Repita a senha"
                  value={values.confirmarSenha}
                  onChange={handleChange}
                  className={styles.input}
                  aria-invalid={!!errors.confirmarSenha}
                />
                {errors.confirmarSenha && <span role="alert" style={{ fontSize: '0.78rem', color: 'var(--color-error)' }}>{errors.confirmarSenha}</span>}
              </div>

              <Button type="submit" size="lg" loading={loading} className={styles.submitBtn}>
                Criar conta →
              </Button>
            </form>

            <p className={styles.footerText}>
              Já tem conta? <Link to="/login" className={styles.link}>Entrar</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
