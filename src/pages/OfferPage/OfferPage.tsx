import { useCallback, useMemo } from 'react'
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
  const onDiscover = useCallback(() => {
    scrollToFormOrElse()
  }, [])

  const heroAlt = useMemo(() => 'Девушка с боксерской грушей', [])

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
          <picture className="offer__picture">
            <source media="(min-width: 901px)" srcSet={OFFER_HERO_DESKTOP} />
            <img
              className="offer__hero-image"
              src={OFFER_HERO_MOBILE}
              alt={heroAlt}
              loading="eager"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
