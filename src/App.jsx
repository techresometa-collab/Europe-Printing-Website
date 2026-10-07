import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import LanguageModal from './components/LanguageModal'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import ContactUs from './pages/ContactUs'

/**
 * 404 – Not Found page
 * Keeps layout but shows a friendly "not found" message.
 */
function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ paddingTop: 'var(--navbar-height)' }}
    >
      <p className="text-8xl font-bold mb-4" style={{ color: 'var(--color-primary-light)' }}>
        404
      </p>
      <h1 className="font-heading font-bold text-2xl mb-2" style={{ color: 'var(--color-text)' }}>
        Page Not Found
      </h1>
      <p className="mb-6" style={{ color: 'var(--color-text-muted)' }}>
        The page you're looking for doesn't exist.
      </p>
      <a href="/" className="btn btn-primary">Go Home</a>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        {/* Language selection modal – shown on first visit */}
        <LanguageModal />
        {/* Sticky navigation bar */}
        <Navbar />
        {/* Main content – push below the fixed navbar */}
        <main
          id="main-content"
          style={{ paddingTop: 'var(--navbar-height)' }}
          tabIndex={-1}
        >
          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/about"   element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*"        element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </LanguageProvider>
  )
}
