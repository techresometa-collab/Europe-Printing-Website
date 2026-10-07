import { useLanguage } from '../context/LanguageContext'
import { WhatsAppIcon, ClockIcon } from './Icons'
import { buildWhatsAppUrl } from '../data/services'

export default function ServiceCard({ service, showDetails = false }) {
  const { language, t } = useLanguage()
  const lang = language
  const whatsappUrl = buildWhatsAppUrl(service.whatsappMsg[lang])

  /* ── DETAILED card (Services page) ── */
  if (showDetails) {
    return (
      <article className="service-card service-card--detail" aria-label={service.name[lang]}>
        {/* Image */}
        <div className="service-card-img-wrap">
          <img
            src={service.image}
            alt={service.name[lang]}
            className="service-card-img"
            loading="lazy"
            width="400"
            height="190"
          />
          <div className="service-card-overlay">
            <span className="service-card-kicker">{t.servicesPage.label}</span>
          </div>
        </div>

        {/* Body */}
        <div className="service-card-body">
          <div className="service-card-topline">
            <span className="service-card-eyebrow">{t.servicesPage.detailsTitle}</span>
          </div>
          <h3 className="service-card-title">{service.name[lang]}</h3>
          <p className="service-card-desc service-card-desc--full">
            {service.description[lang]}
          </p>

          {/* Highlights */}
          {service.highlights && (
            <ul className="service-card-highlights">
              {service.highlights[lang].map((item, i) => (
                <li key={i} className="service-card-highlight">
                  <span className="service-card-check" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Meta chips — turnaround + min order */}
          <div className="service-card-chips">
            {service.turnaround && (
              <span className="service-card-chip">
                <ClockIcon size={12} />
                {service.turnaround[lang]}
              </span>
            )}
            {service.minOrder && (
              <span className="service-card-chip">
                <span aria-hidden="true" style={{ fontSize: '0.7rem' }}>📦</span>
                {service.minOrder[lang]}
              </span>
            )}
          </div>

          {/* CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm mt-auto"
          >
            <WhatsAppIcon size={15} />
            {t.servicesPage.whatsappBtn}
          </a>
        </div>
      </article>
    )
  }

  /* ── COMPACT card (Home page) ── */
  return (
    <article className="service-card" aria-label={service.name[lang]}>
      <div className="overflow-hidden" style={{ height: '160px' }}>
        <img
          src={service.image}
          alt={service.name[lang]}
          className="service-card-img"
          loading="lazy"
          width="400"
          height="160"
        />
      </div>
      <div className="service-card-body">
        <h3 className="service-card-title">{service.name[lang]}</h3>
        <p className="service-card-desc">{service.description[lang]}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-sm mt-auto"
        >
          <WhatsAppIcon size={15} />
          {t.homeServices.whatsappBtn}
        </a>
      </div>
    </article>
  )
}
