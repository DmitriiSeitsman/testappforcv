import { useCallback, useEffect, useMemo, useState } from 'react'
import { HeroSection } from './components/HeroSection/HeroSection'
import { TrustSection } from './components/TrustSection/TrustSection'
import { SocialProofSection } from './components/SocialProofSection/SocialProofSection'
import { OfferPage } from './pages/OfferPage/OfferPage'

function App() {
  const normalizePath = useCallback((path: string) => {
    if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1)
    return path
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
      window.history.pushState({}, '', next)
      setPath(next)
    },
    [normalizePath]
  )

  const isOfferRoute = path === '/offer' || path === '/top5'

  if (isOfferRoute) {
    return <OfferPage />
  }

  return (
    <main>
      <HeroSection />
      <TrustSection />
      <SocialProofSection onBackToOffer={() => navigate('/offer')} />
    </main>
  )
}

export default App
