import './TrustSection.css'
import dumbbellIcon from '../../assets/dumbbell-large-minimalistic-svgrepo-com 5.png'
import { TrustSlider } from './TrustSlider'

const TRUST_ITEMS = [
  'Вице-чемпионка мира и чемпионка России по фитнес-бикини',
  'Профессиональный фитнес-тренер с опытом более 15 лет',
  'Мама 2-х детей. Всего за 100 дней после первых родов похудела на 20 кг и вернулась в прежнюю форму',
  'Автор первых в России масштабных марафонов стройности',
  'Чемпионка России и мира по жиму лёжа',
] as const

export function TrustSection() {
  return (
    <section className="trust" aria-labelledby="trust-title">
      <div className="trust__container">
        <h2 className="trust__title" id="trust-title">
          Доверьте свое тело чемпионке
          <br />
          фитнес-бикини и тренеру{' '}
          <span className="trust__title-accent">Кате Усмановой</span>
        </h2>

        <p className="trust__description">
          С 2015 года создаёт топовые тренировки для идеальных ягодиц,
          плоского живота и стройности без жёстких диет.
          Уже более 580 000+ участниц тренируются с Катей, ведь она:
        </p>

        <article className="trust__card">
          <ul className="trust__list">
            {TRUST_ITEMS.map((text) => (
              <li className="trust__item" key={text}>
                <img
                  className="trust__icon"
                  src={dumbbellIcon}
                  alt=""
                  width={30}
                  height={30}
                  aria-hidden="true"
                />
                <p className="trust__item-text">{text}</p>
              </li>
            ))}
          </ul>

          <TrustSlider />
        </article>
      </div>
    </section>
  )
}
