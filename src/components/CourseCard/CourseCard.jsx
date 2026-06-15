import { Link } from 'react-router-dom'
import styles from './CourseCard.module.css'

const NIVEL_COLOR = {
  'Iniciante': '#10B981',
  'Intermediário': '#F59E0B',
  'Avançado': '#EF4444',
}

export default function CourseCard({ curso }) {
  const { titulo, descricao, duracao, nivel, vagas, preco, icon, tag, topicos } = curso
  const nivelColor = NIVEL_COLOR[nivel] || '#A78BFA'

  return (
    <article className={styles.card}>
      {tag && <span className={styles.tag}>{tag}</span>}

      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <div className={styles.meta}>
          <span className={styles.nivel} style={{ color: nivelColor, borderColor: `${nivelColor}33`, background: `${nivelColor}11` }}>
            {nivel}
          </span>
          <span className={styles.duracao}>⏱ {duracao}</span>
        </div>
      </div>

      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.descricao}>{descricao}</p>

      <ul className={styles.topicos}>
        {topicos.map((t) => (
          <li key={t} className={styles.topico}>
            <span className={styles.topicoCheck}>✓</span> {t}
          </li>
        ))}
      </ul>

      {/* Progress bar decorative */}
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${Math.max(30, 100 - (vagas / 30) * 100)}%` }} />
      </div>
      <p className={styles.vagas}>{vagas} vagas restantes</p>

      <div className={styles.footer}>
        <span className={styles.preco}>{preco}</span>
        <Link to={`/matricula?curso=${encodeURIComponent(titulo)}`} className={styles.btn}>
          Matricular →
        </Link>
      </div>
    </article>
  )
}
