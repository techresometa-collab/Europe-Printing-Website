import { useLanguage } from '../context/LanguageContext'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
import services from '../data/services'
import { WhatsAppIcon } from '../components/Icons'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '351912345678'

export default function Services() {
  const { t, language } = useLanguage()
  const s = t.servicesPage

  const generalWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    language === 'en'
      ? "Hi Crafty! I'd like to get a quote for your printing services."
      : 'Olá Crafty! Gostaria de obter um orçamento para os serviços de impressão.'
  )}`

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container relative z-10 text-center">
          <span className="section-label mb-3">{s.label}</span>
          <h1 className="page-hero-title mb-4">{s.title}</h1>
          <p className="page-hero-subtitle">{s.subtitle}</p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section
        className="section-padding services-page-section"
        aria-label="All printing services"
      >
        <div className="container">
          <div className="services-page-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                showDetails
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── General CTA Banner ── */}
      <section
        className="section-padding"
        style={{ background: 'var(--color-primary-light)' }}
        aria-label="Get a quote"
      >
        <div className="container text-center">
          <h2
            className="font-heading font-bold text-2xl md:text-3xl mb-3"
            style={{ color: 'var(--color-primary-dark)' }}
          >
            {language === 'en'
              ? "Don't see what you need?"
              : 'Não encontrou o que procura?'}
          </h2>
          <p
            className="text-base mb-6 max-w-lg mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {language === 'en'
              ? 'We handle all types of print projects. Send us a message and we\'ll get back to you with a custom quote.'
              : 'Trabalhamos com todos os tipos de projetos de impressão. Envie-nos uma mensagem e responderemos com um orçamento personalizado.'}
          </p>
          <a
            href={generalWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            <WhatsAppIcon size={20} />
            {s.whatsappBtn}
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
