/**
 * ContactUs.jsx
 *
 * Form submissions go to a Google Apps Script Web App that appends rows
 * to a Google Sheet. To set this up:
 *
 *  1. Open sheet.google.com, create a new sheet called "Crafty – Contact Form"
 *     with headers: Timestamp | Name | Email | Phone | Service | Message
 *
 *  2. Go to Extensions → Apps Script, paste the code below, save, then
 *     Deploy → New deployment → Web app → Execute as "Me" → Who has access "Anyone"
 *
 *     ─── Google Apps Script ───────────────────────────────────
 *     function doPost(e) {
 *       try {
 *         var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *         var data  = JSON.parse(e.postData.contents);
 *         sheet.appendRow([
 *           new Date(),
 *           data.name    || '',
 *           data.email   || '',
 *           data.phone   || '',
 *           data.service || '',
 *           data.message || '',
 *         ]);
 *         return ContentService
 *           .createTextOutput(JSON.stringify({ success: true }))
 *           .setMimeType(ContentService.MimeType.JSON);
 *       } catch(err) {
 *         return ContentService
 *           .createTextOutput(JSON.stringify({ success: false, error: err.message }))
 *           .setMimeType(ContentService.MimeType.JSON);
 *       }
 *     }
 *     ──────────────────────────────────────────────────────────
 *
 *  3. Copy the deployment URL and set VITE_GOOGLE_SCRIPT_URL in your .env file.
 */

import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Footer from '../components/Footer'
import services from '../data/services'
import {
  PhoneIcon, MailIcon, MapPinIcon, ClockIcon,
  WhatsAppIcon, CheckIcon,
} from '../components/Icons'

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || ''
const WHATSAPP_NUMBER   = import.meta.env.VITE_WHATSAPP_NUMBER   || '351912345678'
const BUSINESS_PHONE    = import.meta.env.VITE_BUSINESS_PHONE    || '+351 912 345 678'
const BUSINESS_EMAIL    = import.meta.env.VITE_BUSINESS_EMAIL    || 'hello@craftyprintings.com'
const BUSINESS_ADDRESS  = import.meta.env.VITE_BUSINESS_ADDRESS  || 'Rua Exemplo, 123, Lisboa, Portugal'
const MAPS_EMBED_URL    = import.meta.env.VITE_MAPS_EMBED_URL    || 'https://maps.google.com/maps?q=Lisboa,Portugal&output=embed'

/* ── Simple sanitiser – strip control chars and HTML tags ── */
function sanitise(str) {
  return String(str)
    .replace(/[<>]/g, '')           // strip angle brackets
    .replace(/[\u0000-\u001F]/g, '') // strip control characters
    .trim()
    .slice(0, 2000)                  // hard cap
}

/* ── Validation ── */
function validate(fields, t) {
  const errs = {}
  const v = t.contactPage.validation

  if (!fields.name.trim())               errs.name    = v.nameRequired
  else if (fields.name.trim().length < 2) errs.name   = v.nameMin

  if (!fields.email.trim())              errs.email   = v.emailRequired
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = v.emailInvalid

  if (!fields.message.trim())            errs.message = v.messageRequired
  else if (fields.message.trim().length < 10) errs.message = v.messageMin

  return errs
}

const INITIAL = { name: '', email: '', phone: '', service: '', message: '' }

export default function ContactUs() {
  const { t, language } = useLanguage()
  const c = t.contactPage
  const lang = language

  const [form,     setForm]     = useState(INITIAL)
  const [errors,   setErrors]   = useState({})
  const [status,   setStatus]   = useState('idle') // idle | submitting | success | error
  const [touched,  setTouched]  = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (touched[name]) {
      // Re-validate field on change after first blur
      const fieldErr = validate({ ...form, [name]: value }, t)
      setErrors((prev) => ({ ...prev, [name]: fieldErr[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const fieldErr = validate(form, t)
    setErrors((prev) => ({ ...prev, [name]: fieldErr[name] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })

    const errs = validate(form, t)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('submitting')

    // Sanitise all fields before sending
    const payload = {
      name:    sanitise(form.name),
      email:   sanitise(form.email),
      phone:   sanitise(form.phone),
      service: sanitise(form.service),
      message: sanitise(form.message),
    }

    try {
      if (!GOOGLE_SCRIPT_URL) {
        // No script URL configured – simulate success in dev
        await new Promise((r) => setTimeout(r, 800))
        setStatus('success')
        setForm(INITIAL)
        return
      }

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        // Google Apps Script requires text/plain for CORS-free posting
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      })

      // Google Apps Script always returns 200; check the body
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        setForm(INITIAL)
        setTouched({})
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    lang === 'en'
      ? "Hi Crafty! I'd like to get in touch about a print project."
      : 'Olá Crafty! Gostaria de falar sobre um projeto de impressão.'
  )}`

  const contactItems = [
    { icon: <PhoneIcon size={20} />, label: c.phone,      value: BUSINESS_PHONE,   href: `tel:${BUSINESS_PHONE.replace(/\s/g, '')}` },
    { icon: <MailIcon  size={20} />, label: c.emailLabel, value: BUSINESS_EMAIL,   href: `mailto:${BUSINESS_EMAIL}` },
    { icon: <MapPinIcon size={20}/>, label: c.address,    value: BUSINESS_ADDRESS, href: null },
    { icon: <ClockIcon  size={20}/>, label: c.hours,      value: c.hoursValue,     href: null },
  ]

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container relative z-10 text-center">
          <span className="section-label mb-3">{c.label}</span>
          <h1 className="page-hero-title mb-4">{c.title}</h1>
          <p className="page-hero-subtitle">{c.subtitle}</p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ── Left: Business Info ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h2
                  className="font-heading font-bold text-xl mb-5"
                  style={{ color: 'var(--color-text)' }}
                >
                  {c.infoTitle}
                </h2>
                <div className="flex flex-col gap-5">
                  {contactItems.map(({ icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
                      >
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                          style={{ color: 'var(--color-text-muted)' }}>
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-medium hover:underline"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm" style={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div
                className="rounded-xl p-5"
                style={{ background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}
              >
                <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-primary-dark)' }}>
                  {c.whatsappCta}
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <WhatsAppIcon size={16} />
                  {c.whatsappBtn}
                </a>
              </div>
            </div>

            {/* ── Right: Contact Form ── */}
            <div className="lg:col-span-3">
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <h2
                  className="font-heading font-bold text-xl mb-6"
                  style={{ color: 'var(--color-text)' }}
                >
                  {c.formTitle}
                </h2>

                {/* Success State */}
                {status === 'success' ? (
                  <div className="alert alert-success py-6 flex-col text-center gap-3">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                      style={{ background: 'var(--color-success)', color: 'white' }}
                    >
                      <CheckIcon size={28} />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{c.successTitle}</p>
                      <p className="text-sm mt-1">{c.successMsg}</p>
                    </div>
                    <button
                      className="btn btn-outline btn-sm mt-2"
                      onClick={() => setStatus('idle')}
                    >
                      {lang === 'en' ? 'Send another message' : 'Enviar outra mensagem'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">

                      {/* Name */}
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">
                          {c.name} <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder={c.namePlaceholder}
                          value={form.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`form-input ${errors.name ? 'error' : ''}`}
                          aria-required="true"
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          maxLength={120}
                        />
                        {errors.name && (
                          <span id="name-error" className="form-error" role="alert">{errors.name}</span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          {c.email} <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder={c.emailPlaceholder}
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`form-input ${errors.email ? 'error' : ''}`}
                          aria-required="true"
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          maxLength={254}
                        />
                        {errors.email && (
                          <span id="email-error" className="form-error" role="alert">{errors.email}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                          {c.phone}
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder={c.phonePlaceholder}
                          value={form.phone}
                          onChange={handleChange}
                          className="form-input"
                          maxLength={30}
                        />
                      </div>

                      {/* Service */}
                      <div className="form-group">
                        <label htmlFor="service" className="form-label">
                          {c.service}
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="form-input form-select"
                        >
                          <option value="">{c.servicePlaceholder}</option>
                          {services.map((svc) => (
                            <option key={svc.id} value={svc.name.en}>
                              {svc.name[lang]}
                            </option>
                          ))}
                          <option value="other">{lang === 'en' ? 'Other' : 'Outro'}</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="form-group mb-6">
                      <label htmlFor="message" className="form-label">
                        {c.message} <span aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder={c.messagePlaceholder}
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                        aria-required="true"
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        maxLength={2000}
                      />
                      {errors.message && (
                        <span id="message-error" className="form-error" role="alert">{errors.message}</span>
                      )}
                    </div>

                    {/* Error Alert */}
                    {status === 'error' && (
                      <div className="alert alert-error mb-4" role="alert">
                        <span>⚠</span>
                        {c.errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary w-full"
                      style={{ width: '100%' }}
                      disabled={status === 'submitting'}
                      aria-busy={status === 'submitting'}
                    >
                      {status === 'submitting' ? (
                        <>
                          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                          {c.submitting}
                        </>
                      ) : c.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section
        className="section-padding pt-0"
        style={{ background: 'var(--color-bg)' }}
        aria-label={c.mapTitle}
      >
        <div className="container">
          <h2
            className="font-heading font-bold text-xl mb-6"
            style={{ color: 'var(--color-text)' }}
          >
            {c.mapTitle}
          </h2>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ height: '400px', border: '1px solid var(--color-border)' }}
          >
            <iframe
              title={c.mapTitle}
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
