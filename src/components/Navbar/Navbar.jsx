import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../Button/Button.jsx'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Cursos', href: '/#cursos' },
  { label: 'Diferenciais', href: '/#diferenciais' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault()
      const id = href.slice(2)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`${styles.inner} container`}>
        {/* Logo */}
        <Link to="/" className={styles.logo} aria-label="Escola Tech — página inicial">
          <span className={styles.logoIcon} aria-hidden="true">⚡</span>
          <span>Escola<strong>Tech</strong></span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Menu principal">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <Link to="/matricula">
            <Button size="sm">Matricule-se</Button>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Menu mobile">
          <ul className={styles.mobileList}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.mobileLink} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/matricula" className={styles.mobileCta}>
                Matricule-se Agora →
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
