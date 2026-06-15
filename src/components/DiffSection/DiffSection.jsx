import { diferenciais } from '../../services/mockData.js'
import styles from './DiffSection.module.css'

export default function DiffSection() {
  return (
    <section className={`${styles.section} section`} id="diferenciais">
      <div className="container">
        <header className={`${styles.header} text-center`}>
          <p className="section-label">Por que nos escolher</p>
          <h2 className="section-title">
            Uma experiência de aprendizado <span>diferente</span>
          </h2>
          <p className={`section-subtitle mx-auto`}>
            Combinamos metodologia ativa, mentoria especializada e uma
            comunidade engajada para acelerar sua carreira.
          </p>
        </header>

        <div className={styles.grid}>
          {diferenciais.map((d, i) => (
            <div key={d.titulo} className={styles.card} style={{ '--delay': `${i * 0.07}s` }}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{d.icon}</span>
              </div>
              <h3 className={styles.titulo}>{d.titulo}</h3>
              <p className={styles.descricao}>{d.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
