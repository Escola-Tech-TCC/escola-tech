import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Button from '../../components/Button/Button.jsx'
import { useMatricula } from '../../hooks/useMatricula.js'
import { cursos } from '../../services/mockData.js'
import styles from './Matricula.module.css'

function FormField({ label, id, error, children, required }) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      {children}
      {error && (
        <span className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export default function Matricula() {
  const [searchParams] = useSearchParams()
  const cursoParam = searchParams.get('curso') || ''

  const {
    values,
    errors,
    loading,
    apiError,
    handleChange,
    handleBlur,
    handleSubmit,
    formatTelefone,
  } = useMatricula()

  // Pre-fill course from URL param
  useEffect(() => {
    if (cursoParam) {
      handleChange({ target: { name: 'curso', value: cursoParam } })
    }
  }, [cursoParam]) // eslint-disable-line

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Decorative orb */}
        <div className={styles.orb} aria-hidden="true" />

        <div className={`${styles.inner} container`}>
          {/* Left: info */}
          <aside className={styles.info}>
            <Link to="/" className={styles.back}>
              ← Voltar para o início
            </Link>

            <div className={styles.infoLogo}>
              <span>⚡</span>
            </div>

            <h1 className={styles.infoTitle}>
              Dê o primeiro passo para sua nova carreira
            </h1>
            <p className={styles.infoSub}>
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas
              para confirmar sua matrícula e tirar todas as suas dúvidas.
            </p>

            <ul className={styles.benefits}>
              {[
                '7 dias de garantia — devolução total',
                'Acesso imediato após confirmação',
                'Mentoria de carreira incluída',
                'Certificado com validação blockchain',
                'Comunidade exclusiva no Discord',
              ].map((b) => (
                <li key={b} className={styles.benefit}>
                  <span className={styles.benefitIcon}>✓</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className={styles.trust}>
              <div className={styles.trustAvatars}>
                {['CA', 'RM', 'JC', 'LF'].map((a) => (
                  <div key={a} className={styles.trustAvatar}>{a}</div>
                ))}
              </div>
              <p>
                <strong>+8.400 alunos</strong> já transformaram suas carreiras
              </p>
            </div>
          </aside>

          {/* Right: form */}
          <div className={styles.formWrap}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Formulário de Matrícula</h2>
                <p className={styles.formSub}>Campos marcados com * são obrigatórios</p>
              </div>

              {apiError && (
                <div className={styles.apiError} role="alert">
                  ⚠ {apiError}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className={styles.form}>
                <FormField label="Nome completo" id="nome" error={errors.nome} required>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    placeholder="Ex: Ana Clara Ferreira"
                    value={values.nome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.input} ${errors.nome ? styles.inputError : ''}`}
                    aria-invalid={!!errors.nome}
                    aria-describedby={errors.nome ? 'nome-error' : undefined}
                  />
                </FormField>

                <FormField label="E-mail" id="email" error={errors.email} required>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Ex: ana@email.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    aria-invalid={!!errors.email}
                  />
                </FormField>

                <FormField label="Telefone / WhatsApp" id="telefone" error={errors.telefone} required>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(11) 91234-5678"
                    value={values.telefone}
                    onChange={formatTelefone}
                    onBlur={handleBlur}
                    maxLength={15}
                    className={`${styles.input} ${errors.telefone ? styles.inputError : ''}`}
                    aria-invalid={!!errors.telefone}
                  />
                </FormField>

                <FormField label="Curso desejado" id="curso" error={errors.curso} required>
                  <select
                    id="curso"
                    name="curso"
                    value={values.curso}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.select} ${errors.curso ? styles.inputError : ''} ${!values.curso ? styles.placeholder : ''}`}
                    aria-invalid={!!errors.curso}
                  >
                    <option value="" disabled>Selecione um curso…</option>
                    {cursos.map((c) => (
                      <option key={c.id} value={c.titulo}>{c.titulo}</option>
                    ))}
                  </select>
                </FormField>

                <Button
                  type="submit"
                  size="lg"
                  loading={loading}
                  className={styles.submitBtn}
                >
                  Confirmar Matrícula →
                </Button>

                <p className={styles.privacy}>
                  🔒 Seus dados estão seguros. Não enviamos spam e não
                  compartilhamos com terceiros.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
