import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import CourseCard from '../../components/CourseCard/CourseCard.jsx'
import DiffSection from '../../components/DiffSection/DiffSection.jsx'
import Testimonials from '../../components/Testimonials/Testimonials.jsx'
import FAQ from '../../components/FAQ/FAQ.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Button from '../../components/Button/Button.jsx'
import { cursos } from '../../services/mockData.js'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Courses section */}
        <section className={`${styles.cursosSection} section`} id="cursos">
          <div className="container">
            <header className={styles.cursosHeader}>
              <div>
                <p className="section-label">Trilhas de carreira</p>
                <h2 className="section-title">
                  Escolha seu <span>próximo nível</span>
                </h2>
              </div>
              <Link to="/matricula">
                <Button variant="outline" size="md">
                  Ver todas as trilhas
                </Button>
              </Link>
            </header>

            <div className={styles.cursosGrid}>
              {cursos.map((curso) => (
                <CourseCard key={curso.id} curso={curso} />
              ))}
            </div>

            {/* CTA banner */}
            <div className={styles.ctaBanner}>
              <div>
                <h3>Não sabe por onde começar?</h3>
                <p>Fale com um consultor e descubra a trilha ideal para o seu perfil.</p>
              </div>
              <Link to="/matricula">
                <Button size="lg">Matricule-se Agora →</Button>
              </Link>
            </div>
          </div>
        </section>

        <DiffSection />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </>
  )
}
