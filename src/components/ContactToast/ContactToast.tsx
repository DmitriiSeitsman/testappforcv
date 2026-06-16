import { useEffect, useState } from 'react'
import './ContactToast.css'

const TELEGRAM_URL = 'https://t.me/dseitsman'

export function ContactToast() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible) return undefined

    const showToast = () => setIsVisible(true)
    const timerId = window.setTimeout(showToast, 5000)
    const target = document.getElementById('social-proof-section')

    if (!target || !('IntersectionObserver' in window)) {
      return () => window.clearTimeout(timerId)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          showToast()
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -35% 0px',
        threshold: 0.15,
      }
    )

    observer.observe(target)

    return () => {
      window.clearTimeout(timerId)
      observer.disconnect()
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <aside className="contact-toast" aria-live="polite">
      <p className="contact-toast__text">
        Дмитрий С. ожидает приглашения на собеседование :)
      </p>
      <a
        className="contact-toast__button"
        href={TELEGRAM_URL}
        target="_blank"
        rel="noreferrer"
      >
        Связаться
      </a>
    </aside>
  )
}
