import { useCallback, useEffect, useMemo, useState } from 'react'
import { HeroSection } from './components/HeroSection/HeroSection'
import { TrustSection } from './components/TrustSection/TrustSection'
import { SocialProofSection } from './components/SocialProofSection/SocialProofSection'
import { HomeWorkoutsSection } from './components/HomeWorkoutsSection/HomeWorkoutsSection'
import { ContactToast } from './components/ContactToast/ContactToast'
import { OfferPage } from './pages/OfferPage/OfferPage'
import { PartnerRegistrationPage } from './pages/PartnerRegistrationPage/PartnerRegistrationPage'

function App() {
  const normalizePath = useCallback((path: string) => {
    const pathname = path.split(/[?#]/)[0] || '/'
    if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1)
    return pathname
  }, [])

  const initialPath = useMemo(() => {
    if (typeof window === 'undefined') return '/'
    return normalizePath(window.location.pathname || '/')
  }, [normalizePath])

  const [path, setPath] = useState(initialPath)

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname || '/'))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [normalizePath])

  const navigate = useCallback(
    (to: string) => {
      const next = normalizePath(to)
      window.history.pushState({}, '', to)
      setPath(next)
    },
    [normalizePath]
  )

  const isOfferRoute = path === '/offer' || path === '/top5'
  const isPartnerRegistrationRoute = path === '/partnerregistration'

  const navigateToPartnerRegistration = useCallback(() => {
    const search = window.location.search || ''
    navigate(`/partnerregistration${search}`)
  }, [navigate])

  const navigateToOffer = useCallback(() => {
    const search = window.location.search || ''
    navigate(`/offer${search}`)
  }, [navigate])

  const scrollToForm = useCallback(() => {
    const form = document.getElementById('form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState({}, '', `${window.location.pathname}#form`)
    }
  }, [])

  if (isOfferRoute) {
    return <OfferPage />
  }

  if (isPartnerRegistrationRoute) {
    return <PartnerRegistrationPage />
  }

  return (
    <main>
      <HeroSection onChooseProgram={navigateToPartnerRegistration} />
      <TrustSection />
      <SocialProofSection onReturnToForm={scrollToForm} />
      <HomeWorkoutsSection onDetails={navigateToOffer} />
      <ContactToast />
    </main>
  )
}

export default App
