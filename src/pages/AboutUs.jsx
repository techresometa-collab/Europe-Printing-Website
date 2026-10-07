import { useLanguage } from '../context/LanguageContext'
import Footer from '../components/Footer'

const STATS = [
  { key: 'years',        value: '15+' },
  { key: 'clients',      value: '2,000+' },
  { key: 'projects',     value: '12,000+' },
  { key: 'satisfaction', value: '98%' },
]

// Founder photo placeholder – replace with real image
const FOUNDER_PHOTO = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80'

// Business photo placeholder – replace with real image
const BUSINESS_PHOTO = 'https://images.unsplash.com/photo-1586495777744-4e6232bf5691?w=900&q=80'

export default function AboutUs() {
  const { t } = useLanguage()
  const a = t.aboutPage

  const statsLabels = [a.statsYears, a.statsClients, a.statsProjects, a.statsSatisfaction]

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container relative z-10 text-center">
          <span className="section-label mb-3">{a.label}</span>
          <h1 className="page-hero-title mb-4">{a.title}</h1>
          <p className="page-hero-subtitle">{a.subtitle}</p>
        </div>
      </section>

      {/* ── About Business ── */}
      <section
        className="section-padding"
        style={{ background: 'var(--color-bg)' }}
        aria-labelledby="about-business-title"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="section-label">{a.label}</span>
              <h2 id="about-business-title" className="section-title">
                {a.businessTitle}
              </h2>
              {a.businessDesc.split('\n\n').map((para, i) => (
                <p
                  key={i}
                  className="mb-4 leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {para}
                </p>
              ))}
            </div>
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ boxShadow: 'var(--shadow-xl)' }}>
              <img
                src={BUSINESS_PHOTO}
                alt="Crafty printing studio"
                className="w-full h-80 object-cover"
                loading="lazy"
                width="900"
                height="500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        className="section-padding"
        style={{ background: 'var(--color-primary-50)' }}
        aria-label="Business statistics"
      >
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ key, value }, i) => (
              <div key={key} className="stat-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="stat-number">{value}</div>
                <div className="stat-label">{statsLabels[i]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder Section ── */}
      <section
        className="section-padding"
        style={{ background: 'var(--color-bg)' }}
        aria-labelledby="founder-title"
      >
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">{a.founderTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={FOUNDER_PHOTO}
                  alt={a.founderName}
                  className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover object-top"
                  style={{ boxShadow: 'var(--shadow-xl)' }}
                  loading="lazy"
                  width="400"
                  height="400"
                />
                {/* Accent badge */}
                <div
                  className="absolute -bottom-4 -right-4 rounded-xl px-4 py-3 shadow-lg"
                  style={{ background: 'var(--color-primary)', color: 'white' }}
                >
                  <p className="font-bold text-sm leading-none">15+</p>
                  <p className="text-xs opacity-80">
                    {t.aboutPage.statsYears}
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 id="founder-title" className="section-title mb-1">{a.founderName}</h2>
              <p
                className="text-sm font-semibold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                {a.founderRole}
              </p>
              {a.founderBio.split('\n\n').map((para, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${i === 1 ? 'italic' : ''} mb-3`}
                  style={{ color: i === 1 ? 'var(--color-text-muted)' : 'var(--color-text-secondary)' }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section
        className="section-padding"
        style={{ background: 'var(--color-bg-secondary)' }}
        aria-labelledby="vision-mission-title"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Vision */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'var(--color-primary)',
                color: 'white',
                boxShadow: 'var(--shadow-primary)',
              }}
            >
              <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: 'white' }}>
                {a.visionTitle}
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                {a.visionDesc}
              </p>
            </div>

            {/* Mission */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'var(--color-secondary)',
                color: 'var(--color-text)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: 'var(--color-text)' }}>
                {a.missionTitle}
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {a.missionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        className="section-padding"
        style={{ background: 'var(--color-bg)' }}
        aria-labelledby="values-title"
      >
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">{a.valuesTitle}</span>
            <h2 id="values-title" className="section-title">{a.valuesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.values.map((v, i) => (
              <div key={i} className="value-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <h4
                  className="font-heading font-semibold text-base mb-2"
                  style={{ color: 'var(--color-text)' }}
                >
                  {v.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
