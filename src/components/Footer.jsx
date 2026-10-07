import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { PrinterIcon, PhoneIcon, MailIcon, MapPinIcon, InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '351912345678'
const BUSINESS_PHONE  = import.meta.env.VITE_BUSINESS_PHONE  || '+351 912 345 678'
const BUSINESS_EMAIL  = import.meta.env.VITE_BUSINESS_EMAIL  || 'hello@craftyprintings.com'
const BUSINESS_ADDRESS = import.meta.env.VITE_BUSINESS_ADDRESS || 'Rua Exemplo, 123, Lisboa, Portugal'

export default function Footer() {
  const { t, language } = useLanguage()
  const year = new Date().getFullYear()

  const quickLinks = [
    { to: '/',         label: t.nav.home },
    { to: '/about',    label: t.nav.aboutUs },
    { to: '/services', label: t.nav.services },
    { to: '/gallery',  label: t.nav.gallery },
    { to: '/contact',  label: t.nav.contact },
  ]

  const serviceLinks = [
    { label: language === 'en' ? 'Business Cards'   : 'Cartões de Visita',    to: '/services' },
    { label: language === 'en' ? 'Flyers'            : 'Folhetos',             to: '/services' },
    { label: language === 'en' ? 'Banners'           : 'Banners',              to: '/services' },
    { label: language === 'en' ? 'T-Shirt Printing'  : 'Impressão em Camisetas', to: '/services' },
    { label: language === 'en' ? 'Stickers & Labels' : 'Autocolantes',         to: '/services' },
    { label: language === 'en' ? 'Packaging'         : 'Embalagens',           to: '/services' },
  ]

  return (
    <footer className="footer">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4" aria-label="Crafty – Home">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--color-primary)', color: 'white' }}
              >
                <PrinterIcon size={22} />
              </div>
              <span
                className="font-heading font-bold text-xl tracking-tight"
                style={{ color: 'white' }}
              >
                Crafty
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {t.footer.tagline}
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="footer-title">{t.footer.quickLinks}</h3>
            <nav>
              {quickLinks.map(({ to, label }) => (
                <Link key={to} to={to} className="footer-link">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Services ── */}
          <div>
            <h3 className="footer-title">{t.footer.ourServices}</h3>
            <nav>
              {serviceLinks.map(({ to, label }) => (
                <Link key={label} to={to} className="footer-link">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <h3 className="footer-title">{t.footer.contactInfo}</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_PHONE.replace(/\s/g, '')}`}
                className="footer-link flex items-center gap-2"
                aria-label={`Call ${BUSINESS_PHONE}`}
              >
                <PhoneIcon size={15} style={{ flexShrink: 0, color: 'var(--color-primary)' }} />
                {BUSINESS_PHONE}
              </a>
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="footer-link flex items-center gap-2"
                aria-label={`Email ${BUSINESS_EMAIL}`}
              >
                <MailIcon size={15} style={{ flexShrink: 0, color: 'var(--color-primary)' }} />
                {BUSINESS_EMAIL}
              </a>
              <p className="footer-link flex items-start gap-2" style={{ cursor: 'default' }}>
                <MapPinIcon size={15} style={{ flexShrink: 0, marginTop: 2, color: 'var(--color-primary)' }} />
                {BUSINESS_ADDRESS}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer-bottom">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
          <span>{t.footer.rights.replace('{year}', year)}</span>
          <span>{t.footer.madeWith}</span>
        </div>
      </div>
    </footer>
  )
}
