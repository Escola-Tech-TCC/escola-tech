import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const LINKS = {
  Cursos: [
    'Full Stack Web',
    'Python & Dados',
    'UI/UX Design',
    'DevOps & Cloud',
    'React Native',
  ],
  Empresa: [
    'Sobre nós',
    'Blog',
    'Carreiras',
    'Imprensa',
    'Parceiros',
  ],
  Suporte: [
    'Central de ajuda',
    'Comunidade',
    'Status',
    'Termos de uso',
    'Privacidade',
  ],
}

const SOCIALS = [
  { label: 'GitHub', icon: '⌥', href: '#' },
  { label: 'LinkedIn', icon: '🔗', href: '#' },
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'YouTube', icon: '▶', href: '#' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.top} container`}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoIcon}>⚡</span>
            <span>Escola<strong>Tech</strong></span>
          </Link>
          <p className={styles.tagline}>
            Do zero ao mercado de tech em meses, não anos.
            Aprenda com quem faz acontecer.
          </p>
          <div className={styles.socials}>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className={styles.socialBtn} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(LINKS).map(([group, links]) => (
          <div key={group} className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>{group}</h4>
            <ul className={styles.linkList}>
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.link}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Bottom */}
      <div className={`${styles.bottom} container`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Escola Tech. Todos os direitos reservados.
        </p>
        
        <p className={styles.copy}>
          Feito com ☕ e muito <span className={styles.gradText}>código</span> no Brasil 🇧🇷 
        </p>
      </div>
    </footer>
  )
}
