import './HomeWorkoutsSection.css'

type Workout = {
  badge?: string
  tag?: string
  title: string
  image: string
  mobileImage?: string
  lead: string
  text: string
  flagship?: boolean
}

type ProgramSection = {
  title: string
  workouts: Workout[]
}

const PROGRAM_SECTIONS: ProgramSection[] = [
  {
    title: 'Тренировки дома',
    workouts: [
      {
        badge: 'ФЛАГМАН',
        title: 'Метод Усмановой',
        image: '/assets/images/home-workout-method.png',
        mobileImage: '/assets/images/home-workout-method-mobile.png',
        lead: 'Освоите технику и втянетесь в регулярные тренировки',
        text: 'без травм и через силу. Первая программа, с которой начинают все ученицы Кати.',
        flagship: true,
      },
      {
        tag: 'Марафон',
        title: 'Стройности',
        image: '/assets/images/home-workout-slim.png',
        lead: 'Первый видимый результат за 21 день',
        text: 'уходит первый жир, появляется тонус и лёгкость. Для тех, кто стартует с нуля.',
      },
      {
        tag: 'Марафон',
        title: 'Упругая попа 1.0',
        image: '/assets/images/home-workout-booty-1.png',
        lead: 'Первый объём и подтянутость ягодиц',
        text: 'с собственным весом. Для тех, кто впервые целенаправленно работает над попой.',
      },
      {
        tag: 'Марафон',
        title: 'Упругая попа 2.0',
        image: '/assets/images/home-workout-booty-2.png',
        lead: 'Плотные, упругие ягодицы',
        text: 'следующий уровень после 1.0. С резинкой и утяжелителями, для подготовленных.',
      },
      {
        tag: 'Марафон',
        title: 'Плоский живот',
        image: '/assets/images/home-workout-abs.png',
        mobileImage: '/assets/images/home-workout-abs-mobile.png',
        lead: 'Убрать вываливающийся живот,',
        text: 'который не уходит даже после похудения. Тренировки на глубокие мышцы пресса, которые отвечают за плоский живот — а не за «кубики».',
      },
      {
        tag: 'Курс',
        title: 'Жиросжигающий',
        image: '/assets/images/home-workout-fatburn.png',
        mobileImage: '/assets/images/home-workout-fatburn-mobile.png',
        lead: 'Сжечь жир и проявить рельеф — за 6 недель.',
        text: 'Для тех, кто уже тренировался: с гантелями, по схеме интервальных нагрузок.',
      },
    ],
  },
  {
    title: 'Тренировки в зале',
    workouts: [
      {
        tag: 'Курс',
        title: 'Для зала',
        image: '/assets/images/program-gym.png',
        mobileImage: '/assets/images/program-gym-mobile.png',
        lead: 'Мышцы снова растут',
        text: 'когда дома прогресс уже встал. Готовая программа для зала на мышечный объём.',
      },
    ],
  },
  {
    title: 'Беременность и после родов',
    workouts: [
      {
        tag: 'Курс',
        title: 'Для беременных',
        image: '/assets/images/program-pregnancy.png',
        mobileImage: '/assets/images/program-pregnancy-mobile.png',
        lead: 'Лёгкие роды и тело без перегрузки',
        text: 'безопасные тренировки на всех триместрах. Те самые, по которым Катя тренировалась в свои беременности: спина, тазовое дно, подготовка к родам.',
      },
      {
        tag: 'Курс',
        title: 'Восстановление после родов',
        image: '/assets/images/program-postpartum.png',
        mobileImage: '/assets/images/program-postpartum-mobile.png',
        lead: 'Вернётесь в форму после родов и кесарева',
        text: 'сначала диастаз, тазовое дно и осанка, потом стройность и тонус. По системе, по которой Катя возвращалась сама.',
      },
    ],
  },
  {
    title: 'Питание',
    workouts: [
      {
        badge: 'БЕСТСЕЛЛЕР',
        title: 'ИИ-нутрициолог',
        image: '/assets/images/program-ai-nutrition.png',
        mobileImage: '/assets/images/program-ai-nutrition-mobile.png',
        lead: 'Едите без срывов и понимаете своё тело',
        text: 'питание, тренировки, анализы в кармане. Подскажет, поддержит, не осудит.',
        flagship: true,
      },
      {
        tag: 'Курс',
        title: 'По питанию',
        image: '/assets/images/program-nutrition.png',
        mobileImage: '/assets/images/program-nutrition-mobile.png',
        lead: 'Сбросить вес без диет и жёстких ограничений.',
        text: 'Избавиться от срывов, заедания и качелей веса.',
      },
    ],
  },
  {
    title: 'Любовь к себе',
    workouts: [
      {
        title: 'Любовь к себе 1.0',
        image: '/assets/images/program-selflove-1.png',
        mobileImage: '/assets/images/program-selflove-1-mobile.png',
        lead: 'Перестать ненавидеть своё отражение',
        text: 'и начать тренироваться из любви, а не из злости. Программа для тех, кто худеет годами и всё равно недоволен собой.',
      },
      {
        title: 'Любовь к себе 2.0',
        image: '/assets/images/program-selflove-2.png',
        mobileImage: '/assets/images/program-selflove-2-mobile.png',
        lead: 'Не приносить себя в жертву',
        text: 'ни делам, ни близким, ни еде. Вторая ступень после 1.0, для тех, кто живёт «потом».',
      },
    ],
  },
]

export function HomeWorkoutsSection({
  onDetails,
}: {
  onDetails?: () => void
}) {
  return (
    <section className="home-workouts" aria-labelledby="home-workouts-title">
      <div className="home-workouts__container">
        {PROGRAM_SECTIONS.map(({ title: sectionTitle, workouts }, index) => (
          <div className="home-workouts__section" key={sectionTitle}>
            <h2
              className="home-workouts__title"
              id={index === 0 ? 'home-workouts-title' : undefined}
            >
              {sectionTitle}
            </h2>

            <div className="home-workouts__list">
              {workouts.map(
                ({
                  badge,
                  tag,
                  title,
                  image,
                  mobileImage,
                  lead,
                  text,
                  flagship,
                }) => (
                  <article
                    className={`home-workouts__card ${
                      flagship ? 'home-workouts__card--flagship' : ''
                    }`}
                    key={title}
                  >
                    <picture className="home-workouts__picture">
                      {mobileImage ? (
                        <source media="(max-width: 1020px)" srcSet={mobileImage} />
                      ) : null}
                      <img
                        className="home-workouts__image"
                        src={image}
                        alt={title}
                        loading="lazy"
                      />
                    </picture>

                    <div className="home-workouts__content">
                      {badge ? (
                        <div className="home-workouts__badge">{badge}</div>
                      ) : tag ? (
                        <div className="home-workouts__tag">{tag}</div>
                      ) : null}

                      <h3 className="home-workouts__card-title">{title}</h3>

                      <p className="home-workouts__text">
                        <strong>{lead}</strong> — {text}
                      </p>

                      <button
                        className="home-workouts__button"
                        type="button"
                        onClick={() => onDetails?.()}
                      >
                        Подробнее
                      </button>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
