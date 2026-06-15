import { useState } from 'react'
import { faqs } from '../../services/mockData.js'
import styles from './FAQ.module.css'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.question}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${faq.id}`}
      >
        <span>{faq.pergunta}</span>
        <span className={styles.icon} aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        id={`faq-${faq.id}`}
        className={styles.answer}
        role="region"
      >
        <p>{faq.resposta}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section className={`${styles.section} section`} id="faq">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <p className="section-label">Dúvidas frequentes</p>
            <h2 className="section-title">
              Tem alguma <span>pergunta?</span>
            </h2>
            <p className="section-subtitle">
              Se não encontrar o que procura, fale com a gente pelo WhatsApp
              ou e-mail — respondemos em até 2 horas.
            </p>
            <a
              href="mailto:oi@escolatech.com.br"
              className={styles.contactLink}
            >
              oi@escolatech.com.br →
            </a>
          </div>

          <div className={styles.right}>
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
