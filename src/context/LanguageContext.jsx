import { createContext, useContext, useState, useCallback } from 'react'
import en from '../translations/en'
import pt from '../translations/pt'

const TRANSLATIONS = { en, pt }
const STORAGE_KEY = 'crafty_lang'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    // Read from localStorage only – never trust unvalidated storage values
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'pt' ? 'pt' : stored === 'en' ? 'en' : null
  })

  // null means "not yet chosen" → show modal
  const hasChosen = language !== null

  const setLanguage = useCallback((lang) => {
    if (lang !== 'en' && lang !== 'pt') return // guard against invalid values
    localStorage.setItem(STORAGE_KEY, lang)
    setLanguageState(lang)
  }, [])

  const t = TRANSLATIONS[language ?? 'en']

  return (
    <LanguageContext.Provider value={{ language: language ?? 'en', setLanguage, hasChosen, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
