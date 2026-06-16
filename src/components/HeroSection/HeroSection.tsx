import './HeroSection.css'
import heroImage from '../../assets/68.png'

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title" id="hero-title">
              ПРИВЕДИТЕ ТЕЛО В ФОРМУ
              <br />
              С ЧЕМПИОНКОЙ КАТЕЙ
              <br />
              УСМАНОВОЙ
            </h1>

            <p className="hero__subtitle">
              без диет, голода и запретов
              <br />
              с пользой для здоровья
            </p>

            <p className="hero__description">
              Похудеть, подтянуть попу и живот, набрать форму в зале,
              восстановиться после родов — тренировки и питание под вашу цель
            </p>

            <div className="hero__actions">
              <button className="hero__button" type="button">
                ВЫБРАТЬ ПРОГРАММУ
              </button>
            </div>

            <p className="hero__notice">
              Для корректной работы сайта отключите VPN
            </p>
          </div>

          <figure className="hero__image-wrap">
            <img
              className="hero__image"
              src={heroImage}
              alt="Екатерина Усманова — чемпионка по фитнес-бикини"
              width={975}
              height={1134}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
