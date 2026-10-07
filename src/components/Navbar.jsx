import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { MenuIcon, XIcon, PrinterIcon, GlobalIcon } from './Icons'

export default function Navbar() {
  const { t, language, setLanguage, hasChosen } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en')
  }

  const navItems = [
    { to: '/about',    label: t.nav.aboutUs  },
    { to: '/services', label: t.nav.services  },
    { to: '/gallery',  label: t.nav.gallery   },
  ]

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container h-full flex items-center justify-between">

          {/* ── Logo / Brand ── */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 flex-shrink-0"
            aria-label="Crafty – Home"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--color-primary)', color: 'white' }}
            >
              <PrinterIcon size={20} />
            </div>
            <span
              className="font-heading font-bold text-xl tracking-tight"
              style={{ color: 'var(--color-text)' }}
            >
              Crafty
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* ── Right: Lang toggle + CTA + Hamburger ── */}
          <div className="flex items-center gap-3">

            {/* Language toggle – only show once language has been chosen */}
            {hasChosen && (
              <button
                className="lang-toggle hidden sm:flex"
                onClick={toggleLanguage}
                aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
                title={`Switch to ${language === 'en' ? 'Português' : 'English'}`}
              >
                <GlobalIcon size={14} />
                <span>{language === 'en' ? 'EN' : 'PT'}</span>
              </button>
            )}

            {/* Contact CTA – desktop */}
            <button
              className="btn btn-primary btn-sm hidden md:inline-flex"
              onClick={() => navigate('/contact')}
            >
              {t.nav.contact}
            </button>

            {/* Hamburger – mobile */}
            <button
              className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg transition-colors"
              style={{ color: 'var(--color-text)' }}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}

        {/* Lang toggle in mobile */}
        {hasChosen && (
          <button
            className="mobile-nav-link flex items-center gap-2 w-full text-left"
            onClick={() => { toggleLanguage(); closeMenu() }}
            style={{ border: 'none', cursor: 'pointer', background: 'none' }}
          >
            <GlobalIcon size={16} />
            {language === 'en' ? 'Switch to Português' : 'Mudar para English'}
          </button>
        )}

        <div className="pt-4">
          <button
            className="btn btn-primary w-full"
            style={{ width: '100%' }}
            onClick={() => { navigate('/contact'); closeMenu() }}
          >
            {t.nav.contact}
          </button>
        </div>
      </div>
    </>
  )
}
