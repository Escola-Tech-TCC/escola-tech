import { Link } from 'react-router-dom'
import Button from '../Button/Button.jsx'
import styles from './Hero.module.css'

const STATS = [
  { value: '8.400+', label: 'Alunos formados' },
  { value: '94%',    label: 'Taxa de empregabilidade' },
  { value: '200+',   label: 'Empresas parceiras' },
]

export default function Hero() {
  const scrollToCursos = () => {
    document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} aria-label="Seção principal">
      {/* Background effects */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        <div className={styles.content}>
          {/* Eyebrow */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Turmas abertas — vagas limitadas
          </div>

          


          {/* Headline */}
          <h1 className={styles.headline}>
            
            Do zero ao<br />
            <span className={styles.gradientText}>mercado de tech</span><br />
            em meses, não anos.
          </h1>

          {/* Sub */}
          <p className={styles.sub}>
            Aprenda programação, dados e design com quem trabalha nas maiores
            empresas de tecnologia do Brasil. Projetos reais, mentores reais,
            resultados reais.
          </p>

          {/* CTAs */}
          <div className={styles.ctas}>
            <Link to="/matricula">
              <Button size="lg">
                Matricule-se Agora →
              </Button>
            </Link>
            <button className={styles.secondaryCta} onClick={scrollToCursos}>
              Ver cursos disponíveis
            </button>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <strong className={styles.statValue}>{s.value}</strong>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        

        {/* Visual card */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.terminalCard}>
            <div className={styles.terminalBar}>
              <span className={styles.dot} style={{ background: '#FF5F57' }} />
              <span className={styles.dot} style={{ background: '#FFBD2E' }} />
              <span className={styles.dot} style={{ background: '#28CA41' }} />
              <span className={styles.terminalTitle}>escola-tech/meu-projeto</span>
            </div>
            <div className={styles.terminalBody}>
              <p><span className={styles.c1}>const</span> <span className={styles.c2}>minhaCarreira</span> <span className={styles.c1}>=</span> <span className={styles.c3}>await</span> <span className={styles.c4}>EscolaTech</span><span className={styles.c1}>(</span><span className={styles.c1}>)</span></p>
              <p className={styles.comment}>// ✅ Vaga conseguida em 6 meses</p>
              <p><span className={styles.c2}>minhaCarreira</span><span className={styles.c1}>.</span><span className={styles.c4}>nivel</span> <span className={styles.c1}>===</span> <span className={styles.c3}>'Senior'</span></p>
              <p><span className={styles.c2}>minhaCarreira</span><span className={styles.c1}>.</span><span className={styles.c4}>salario</span> <span className={styles.c1}>===</span> <span className={styles.c3}>'R$ 8.000+'</span></p>
              <p className={styles.comment}>// 🚀 Você está aqui</p>
              <p><span className={styles.cursor}>_</span></p>
            </div>
          </div>

          {/* Floating pills */}
          <div className={`${styles.pill} ${styles.pill1}`}>
            ⚡ Node.js
          </div>
          <div className={`${styles.pill} ${styles.pill2}`}>
            🎨 Figma
          </div>
          <div className={`${styles.pill} ${styles.pill3}`}>
            🧠 Python & IA
          </div>
        </div>
      </div>
    </section>
  )
}
