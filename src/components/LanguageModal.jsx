import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { PrinterIcon } from './Icons'

export default function LanguageModal() {
  const { hasChosen, setLanguage, t } = useLanguage()
  const [selected, setSelected] = useState('en')

  if (hasChosen) return null

  const handleConfirm = () => {
    setLanguage(selected)
  }

  return (
    <div className="lang-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="lang-modal-title">
      <div className="lang-modal">

        {/* Brand logo mark */}
        <div className="flex justify-center mb-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ background: 'var(--color-primary)', color: 'white' }}
          >
            <PrinterIcon size={28} />
          </div>
        </div>

        <h2
          id="lang-modal-title"
          className="font-heading font-bold text-2xl mb-1"
          style={{ color: 'var(--color-text)' }}
        >
          {t.lang.modalTitle}
        </h2>
        <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
          {t.lang.modalSubtitle}
        </p>

        {/* Language Options */}
        <div className="flex gap-3 mb-6">
          <button
            className={`lang-option ${selected === 'en' ? 'selected' : ''}`}
            onClick={() => setSelected('en')}
            aria-pressed={selected === 'en'}
          >
            <span className="text-3xl" aria-hidden="true">🇬🇧</span>
            <span className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
              {t.lang.english}
            </span>
          </button>
          <button
            className={`lang-option ${selected === 'pt' ? 'selected' : ''}`}
            onClick={() => setSelected('pt')}
            aria-pressed={selected === 'pt'}>
            <span className="text-3xl" aria-hidden="true">🇵🇹</span>
            <span className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
              {t.lang.portuguese}
            </span>
          </button>
        </div>

        <button
          className="btn btn-primary w-full"
          onClick={handleConfirm}
          style={{ width: '100%' }}
        >
          {t.lang.continue}
        </button>
      </div>
    </div>
  )
}
