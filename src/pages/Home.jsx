import { useLanguage } from '../context/LanguageContext'
import HeroCarousel from '../components/HeroCarousel'
import ServiceCard from '../components/ServiceCard'
import ProductCarousel from '../components/ProductCarousel'
import Footer from '../components/Footer'
import services from '../data/services'

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      {/* ── 1. Hero Carousel ── */}
      <HeroCarousel />

      {/* ── 2. Services Section – all 16 services ── */}
      <section
        id="services-preview"
        className="section-padding"
        style={{ background: 'var(--color-bg)' }}
        aria-labelledby="home-services-title"
      >
        <div className="container">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="section-label">{t.homeServices.label}</span>
            <h2
              id="home-services-title"
              className="section-title"
            >
              {t.homeServices.title}
            </h2>
            <p className="section-subtitle mx-auto">{t.homeServices.subtitle}</p>
          </div>

          {/* Cards Grid – 4 cols desktop → 3 tablet → 2 mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Products Carousel ── */}
      <ProductCarousel />

      {/* ── 4. Footer ── */}
      <Footer />
    </>
  )
}
