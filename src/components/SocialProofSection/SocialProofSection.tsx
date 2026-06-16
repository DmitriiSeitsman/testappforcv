import './SocialProofSection.css'

const SOCIAL_PROOF_IMAGES = [
  { src: '/assets/images/social-proof-1.png', alt: 'Катя Усманова на ТВ' },
  { src: '/assets/images/social-proof-2.png', alt: 'Обложка тренировки' },
  { src: '/assets/images/social-proof-3.png', alt: 'Мама фитнес-бикини' },
  { src: '/assets/images/social-proof-4.png', alt: 'Статья о Кате Усмановой' },
] as const

export function SocialProofSection({
  onBackToOffer,
}: {
  onBackToOffer?: () => void
}) {
  return (
    <section className="social-proof" aria-labelledby="social-proof-title">
      <div className="social-proof__container">
        <h2 className="social-proof__title" id="social-proof-title">
          Кате доверяют миллионы.{' '}
          <span className="social-proof__title-accent">
            Её методы
            <br />
            работают
          </span>
          {' '}— и об этом говорят все
        </h2>

        <article className="social-proof__card">
          <p className="social-proof__description">
            580 000+ учениц. Подкасты. Статьи
            <br />
            в СМИ. Коллаборации с звёздами.
          </p>

          <div className="social-proof__grid">
            {SOCIAL_PROOF_IMAGES.map(({ src, alt }) => (
              <img
                key={alt}
                className="social-proof__image"
                src={src}
                alt={alt}
                width={250}
                height={250}
                loading="lazy"
              />
            ))}
          </div>
        </article>

        <button
          className="social-proof__button"
          type="button"
          onClick={() => onBackToOffer?.()}
        >
          ВЕРНУТЬ ФОРМУ
        </button>
      </div>
    </section>
  )
}
