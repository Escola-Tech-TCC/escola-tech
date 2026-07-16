import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Button from '../../components/Button/Button.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import styles from './Login.module.css'

export default function Login() {
  const { entrar } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const destino = location.state?.from || '/area-do-aluno'

  const [values, setValues] = useState({ email: '', senha: '' })
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (erro) setErro('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      entrar(values)
      navigate(destino, { replace: true })
    } catch (err) {
      setErro(err.message || 'Não foi possível entrar. Tente novamente.')
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
              <h1 className={styles.title}>Área do Aluno</h1>
              <p className={styles.sub}>Entre com seu e-mail e senha para acessar suas matérias.</p>
            </div>

            {erro && (
              <div className={styles.apiError} role="alert">
                ⚠ {erro}
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="seu@email.com"
                  value={values.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="senha" className={styles.label}>Senha</label>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  value={values.senha}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <Button type="submit" size="lg" loading={loading} className={styles.submitBtn}>
                Entrar →
              </Button>
            </form>

            <p className={styles.footerText}>
              Ainda não tem conta? <Link to="/cadastro" className={styles.link}>Cadastre-se</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
