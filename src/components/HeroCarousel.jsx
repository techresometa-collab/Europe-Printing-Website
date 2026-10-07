import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ChevronLeftIcon, ChevronRightIcon, WhatsAppIcon } from './Icons'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '351912345678'
const AUTO_PLAY_INTERVAL = 5500

export default function HeroCarousel() {
  const { t } = useLanguage()
  const slides = t.hero.slides
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef(null)

  const goTo = useCallback((index) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent(index)
    setTimeout(() => setIsAnimating(false), 900)
  }, [isAnimating])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, slides.length, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, slides.length, goTo])

  useEffect(() => {
    timerRef.current = setInterval(next, AUTO_PLAY_INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [next])

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, AUTO_PLAY_INTERVAL)
  }, [next])

  const handlePrev = () => { prev(); resetTimer() }
  const handleNext = () => { next(); resetTimer() }
  const handleDot  = (i) => { goTo(i); resetTimer() }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft')  handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current])

  const slide = slides[current]
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Crafty! I'd like to learn more about your printing services."
  )}`

  return (
    <section
      className="hero"
      role="region"
      aria-label="Hero carousel"
      aria-roledescription="carousel"
    >
      {/* ── Background slides ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${i + 1} of ${slides.length}`}
          aria-hidden={i !== current}
        >
          <div className="hero-overlay" />
        </div>
      ))}

      {/* ── Text content — re-mounts on slide change to replay animation ── */}
      <div className="hero-content container">
        <div className="max-w-lg fade-up" key={current}>
          <span className="hero-badge">{slide.badge}</span>

          <h1 className="hero-title">
            {slide.title}
            <span>{slide.titleHighlight}</span>
          </h1>

          <p className="hero-subtitle">{slide.subtitle}</p>

          <div className="flex flex-wrap gap-3">
            <Link to="/services" className="btn btn-secondary">
              {slide.cta}
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
            >
              <WhatsAppIcon size={16} />
              {slide.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        className="hero-arrow hero-arrow-prev"
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon size={18} />
      </button>
      <button
        className="hero-arrow hero-arrow-next"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <ChevronRightIcon size={18} />
      </button>

      {/* ── Dot indicators ── */}
      <div className="hero-controls" role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => handleDot(i)}
          />
        ))}
      </div>
    </section>
  )
}
