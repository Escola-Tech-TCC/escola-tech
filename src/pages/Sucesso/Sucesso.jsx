import { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Button from '../../components/Button/Button.jsx'
import styles from './Sucesso.module.css'

function Confetti() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = ['#7C3AED', '#A78BFA', '#38BDF8', '#10B981', '#F59E0B']
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * 100,
      size: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 2,
      speedY: 2 + Math.random() * 3,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 4,
      shape: Math.random() > 0.5 ? 'rect' : 'circle',
    }))

    let animId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let alive = false
      particles.forEach((p) => {
        if (p.y < canvas.height + 20) alive = true
        p.x += p.speedX
        p.y += p.speedY
        p.rotation += p.rotSpeed
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(0, 1 - p.y / canvas.height)
        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5)
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()
      })
      if (alive) animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animId)
  }, [])

  return <canvas ref={canvasRef} className={styles.confetti} aria-hidden="true" />
}

export default function Sucesso() {
  const { state } = useLocation()
  const navigate = useNavigate()

  // Redirect if accessed directly without state
  useEffect(() => {
    if (!state?.nome) {
      navigate('/', { replace: true })
    }
  }, [state, navigate])

  if (!state?.nome) return null

  const { nome, curso } = state
  const firstName = nome.split(' ')[0]

  return (
    <>
      <Navbar />
      <Confetti />

      <main className={styles.main}>
        <div className={`${styles.inner} container`}>
          <div className={styles.card}>
            {/* Icon */}
            <div className={styles.successIcon}>
              <span>✓</span>
            </div>

            {/* Message */}
            <div className={styles.message}>
              <h1 className={styles.title}>
                Parabéns, {firstName}! 🎉
              </h1>
              <p className={styles.sub}>
                Sua matrícula em <strong>{curso}</strong> foi recebida com sucesso.
              </p>
              <p className={styles.detail}>
                Nossa equipe entrará em contato em até <strong>24 horas</strong> pelo
                e-mail e WhatsApp que você cadastrou. Prepare-se para começar uma
                jornada incrível!
              </p>
            </div>

            {/* Next steps */}
            <div className={styles.steps}>
              <h2 className={styles.stepsTitle}>Próximos passos</h2>
              <ol className={styles.stepsList}>
                {[
                  { n: '01', text: 'Aguarde o contato da nossa equipe por e-mail e WhatsApp.' },
                  { n: '02', text: 'Confirme seu pagamento e finalize o processo de matrícula.' },
                  { n: '03', text: 'Entre na comunidade do Discord e conheça seus colegas de turma.' },
                  { n: '04', text: 'Acesse a plataforma e comece a aprender no seu ritmo!' },
                ].map((s) => (
                  <li key={s.n} className={styles.step}>
                    <span className={styles.stepNum}>{s.n}</span>
                    <p>{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Actions */}
            <div className={styles.actions}>
              <Link to="/">
                <Button variant="primary" size="lg">
                  ← Voltar para o início
                </Button>
              </Link>
              <Link to="/matricula">
                <Button variant="ghost" size="lg">
                  Matricular em outro curso
                </Button>
              </Link>
            </div>

            {/* Social share */}
            <p className={styles.share}>
              Compartilhe sua conquista! 🚀
              <a href="#" className={styles.shareLink}> LinkedIn</a> ·
              <a href="#" className={styles.shareLink}> WhatsApp</a> ·
              <a href="#" className={styles.shareLink}> Instagram</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
