import { useState, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { ChevronLeftIcon, ChevronRightIcon, WhatsAppIcon } from './Icons'
import { buildWhatsAppUrl } from '../data/services'
import products from '../data/products'

const VISIBLE_DESKTOP = 4
const VISIBLE_TABLET  = 2
const VISIBLE_MOBILE  = 1

function getVisible() {
  if (typeof window === 'undefined') return VISIBLE_DESKTOP
  if (window.innerWidth >= 1024) return VISIBLE_DESKTOP
  if (window.innerWidth >= 640)  return VISIBLE_TABLET
  return VISIBLE_MOBILE
}

export default function ProductCarousel() {
  const { t, language } = useLanguage()
  const lang = language
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)
  const visible = getVisible()
  const maxIndex = Math.max(0, products.length - visible)

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1))

  // Calculate card width as percentage
  const cardWidthPct = 100 / visible

  return (
    <section
      className="section-padding"
      style={{ background: 'var(--color-bg-secondary)' }}
      aria-label="Products carousel"
    >
      <div className="container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="section-label">{t.homeProducts.label}</span>
            <h2 className="section-title">{t.homeProducts.title}</h2>
            <p className="section-subtitle">{t.homeProducts.subtitle}</p>
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={prev}
              disabled={index === 0}
              className="flex items-center justify-center w-10 h-10 rounded-full border transition-all"
              style={{
                borderColor: index === 0 ? 'var(--color-border)' : 'var(--color-primary)',
                color:       index === 0 ? 'var(--color-text-light)' : 'var(--color-primary)',
                background:  index === 0 ? 'transparent' : 'var(--color-primary-light)',
                cursor: index === 0 ? 'not-allowed' : 'pointer',
              }}
              aria-label="Previous products"
            >
              <ChevronLeftIcon size={18} />
            </button>
            <button
              onClick={next}
              disabled={index >= maxIndex}
              className="flex items-center justify-center w-10 h-10 rounded-full border transition-all"
              style={{
                borderColor: index >= maxIndex ? 'var(--color-border)' : 'var(--color-primary)',
                color:       index >= maxIndex ? 'var(--color-text-light)' : 'var(--color-primary)',
                background:  index >= maxIndex ? 'transparent' : 'var(--color-primary-light)',
                cursor: index >= maxIndex ? 'not-allowed' : 'pointer',
              }}
              aria-label="Next products"
            >
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>

        {/* Track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="product-carousel-track"
            style={{ transform: `translateX(-${index * cardWidthPct}%)` }}
          >
            {products.map((product) => {
              const waUrl = buildWhatsAppUrl(product.whatsappMsg[lang])
              return (
                <article
                  key={product.id}
                  className="product-card"
                  style={{ flex: `0 0 calc(${cardWidthPct}% - ${(visible - 1) * 6 / visible}px)` }}
                  aria-label={product.name[lang]}
                >
                  <div className="overflow-hidden" style={{ height: '180px' }}>
                    <img
                      src={product.image}
                      alt={product.name[lang]}
                      className="product-card-img"
                      loading="lazy"
                      width="300"
                      height="180"
                    />
                  </div>
                  <div className="product-card-body">
                    <p className="product-card-title">{product.name[lang]}</p>
                    <p className="product-card-price">{product.price}</p>
                    <p className="product-card-desc mb-3">{product.description[lang]}</p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm w-full justify-center"
                      style={{ width: '100%' }}
                    >
                      <WhatsAppIcon size={14} />
                      {t.homeProducts.orderBtn}
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="rounded-full transition-all"
              style={{
                width:  i === index ? '24px' : '8px',
                height: '8px',
                background: i === index ? 'var(--color-primary)' : 'var(--color-border)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
              aria-label={`Go to product group ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
