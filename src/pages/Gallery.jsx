import { useState, useCallback, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Footer from '../components/Footer'
import gallery, { GALLERY_CATEGORIES } from '../data/gallery'
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '../components/Icons'

export default function Gallery() {
  const { t, language } = useLanguage()
  const g = t.galleryPage
  const lang = language

  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null) // null = closed

  // Filtered items
  const filtered = activeCategory === 'all'
    ? gallery
    : gallery.filter((item) => item.category === activeCategory)

  // Lightbox navigation
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)
  }, [filtered.length])
  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % filtered.length)
  }, [filtered.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e) => {
      if (e.key === 'Escape')     closeLightbox()
      if (e.key === 'ArrowLeft')  prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, closeLightbox, prevImage, nextImage])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  const categories = Object.entries(GALLERY_CATEGORIES)

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container relative z-10 text-center">
          <span className="section-label mb-3">{g.label}</span>
          <h1 className="page-hero-title mb-4">{g.title}</h1>
          <p className="page-hero-subtitle">{g.subtitle}</p>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section
        className="section-padding"
        style={{ background: 'var(--color-bg)' }}
        aria-label="Photo gallery"
      >
        <div className="container">

          {/* Filter Buttons */}
          <div
            className="flex flex-wrap gap-2 justify-center mb-10"
            role="group"
            aria-label="Filter gallery by category"
          >
            {categories.map(([key, names]) => (
              <button
                key={key}
                className={`gallery-filter-btn ${activeCategory === key ? 'active' : ''}`}
                onClick={() => { setActiveCategory(key); setLightboxIndex(null) }}
                aria-pressed={activeCategory === key}
              >
                {names[lang]}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filtered.length === 0 ? (
            <p className="text-center py-20" style={{ color: 'var(--color-text-muted)' }}>
              {g.noItems}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((item, i) => (
                <button
                  key={item.id}
                  className="gallery-item"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View ${item.label[lang]}`}
                >
                  <img
                    src={item.thumb}
                    alt={item.label[lang]}
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-label">{item.label[lang]}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Image lightbox: ${filtered[lightboxIndex].label[lang]}`}
          onClick={closeLightbox}
        >
          {/* Stop propagation on image to prevent accidental close */}
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].label[lang]}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Close */}
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <XIcon size={20} />
          </button>

          {/* Prev */}
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            aria-label="Previous image"
          >
            <ChevronLeftIcon size={22} />
          </button>

          {/* Next */}
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            aria-label="Next image"
          >
            <ChevronRightIcon size={22} />
          </button>

          {/* Caption */}
          <div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: 'rgba(255,255,255,0.15)',
              color: 'white',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {filtered[lightboxIndex].label[lang]}
            &nbsp;·&nbsp;
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
