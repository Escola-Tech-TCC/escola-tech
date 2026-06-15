import { depoimentos } from '../../services/mockData.js'
import styles from './Testimonials.module.css'

function Stars({ count = 5 }) {
  return (
    <div className={styles.stars} aria-label={`${count} estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className={`${styles.section} section`} id="depoimentos">
      <div className="container">
        <header className={`${styles.header} text-center`}>
          <p className="section-label">Depoimentos</p>
          <h2 className="section-title">
            Histórias de quem <span>transformou</span> a carreira
          </h2>
        </header>

        <div className={styles.grid}>
          {depoimentos.map((d) => (
            <blockquote key={d.id} className={styles.card}>
              <Stars count={d.estrelas} />
              <p className={styles.texto}>"{d.texto}"</p>
              <footer className={styles.autor}>
                <div className={styles.avatar}>{d.avatar}</div>
                <div>
                  <p className={styles.nome}>{d.nome}</p>
                  <p className={styles.cargo}>{d.cargo}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
