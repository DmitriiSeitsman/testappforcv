import { useCallback, useEffect, useMemo, useState } from 'react'
import { CountdownTimer } from '../../components/CountdownTimer/CountdownTimer'
import './OfferPage.css'

const OFFER_HERO_DESKTOP = '/assets/images/boxinggirllong.png'
const OFFER_HERO_MOBILE = '/assets/images/boxinggirl.jpg'

function scrollToFormOrElse() {
  const form = document.getElementById('form')
  if (form) {
    form.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }

  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

export function OfferPage() {
  const [heroSrc, setHeroSrc] = useState(OFFER_HERO_MOBILE)

  const onDiscover = useCallback(() => {
    scrollToFormOrElse()
  }, [])

  const heroAlt = useMemo(() => 'Девушка с боксерской грушей', [])

  useEffect(() => {
    const getSrc = () =>
      window.matchMedia('(min-width: 901px)').matches
        ? OFFER_HERO_DESKTOP
        : OFFER_HERO_MOBILE

    setHeroSrc(getSrc())

    const mql = window.matchMedia('(min-width: 901px)')
    const onChange = () => setHeroSrc(getSrc())

    const mqlAny = mql as unknown as {
      addEventListener?: (type: string, listener: () => void) => void
      removeEventListener?: (type: string, listener: () => void) => void
      addListener?: (listener: () => void) => void
      removeListener?: (listener: () => void) => void
    }

    if (mqlAny.addEventListener) {
      mqlAny.addEventListener('change', onChange)
      return () => mqlAny.removeEventListener?.('change', onChange)
    }

    mqlAny.addListener?.(onChange)
    return () => mqlAny.removeListener?.(onChange)
  }, [])

  return (
    <section className="offer" aria-label="Промо-страница">
      <div className="offer__container">
        <div className="offer__text-column">
          <h1 className="offer__title">
            <span className="offer__title-accent">ВЕРНИТЕ СЕБЕ</span>
            <br />
            <span className="offer__title-accent">ТЕЛО,</span> В КОТОРОМ
            <br />
            ВАМ ХОРОШО
          </h1>

          <p className="offer__description">
            5 легендарных программ Кати Усмановой,
            <br />
            пересобранные под вашу жизнь{' '}
            <span className="offer__description-accent">со скидкой 91%</span>.
          </p>

          <p className="offer__description offer__description--no-accent">
            Дома, по 20–30 минут, а заботу о питании мы берём на себя.
          </p>

          <button className="offer__cta" type="button" onClick={onDiscover}>
            УЗНАТЬ ПОДРОБНЕЕ
          </button>

          <p className="offer__vpn">Для стабильной работы сайта отключите VPN!</p>

          <div className="offer__timer">
            <div className="offer__timer-label">До конца распродажи осталось:</div>
            <CountdownTimer />
          </div>
        </div>

        <div className="offer__image-column" aria-hidden="true">
          <img
            className="offer__hero-image"
            src={heroSrc}
            alt={heroAlt}
            onError={() => setHeroSrc(OFFER_HERO_MOBILE)}
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
