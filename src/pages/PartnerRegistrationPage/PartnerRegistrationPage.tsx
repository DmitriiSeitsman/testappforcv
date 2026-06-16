import { useMemo } from 'react'
import './PartnerRegistrationPage.css'

const FORM_ACTION =
  'https://usmanovafit.gymteam.ru/pl/lite/block-public/process?id=2232812571'
const ORIGINAL_PAGE_URL = 'https://usmanovafit.gymteam.ru/partnerregistration'

function getQueryParam(name: string) {
  if (typeof window === 'undefined') return ''
  return new URLSearchParams(window.location.search).get(name) || ''
}

export function PartnerRegistrationPage() {
  const hiddenFields = useMemo(
    () => ({
      telegramId: getQueryParam('tgid'),
      ambassadorId: getQueryParam('ambassid'),
    }),
    []
  )

  return (
    <main className="partner-page">
      <section className="partner-page__section partner-page__section--intro">
        <div className="partner-page__container">
          <h1 className="partner-page__title">
            Условия программы для амбассадоров
          </h1>
          <p className="partner-page__lead">
            Краткое описание программы, преимущества и правила участия.
          </p>
        </div>
      </section>

      <section className="partner-page__section partner-page__section--offer">
        <div className="partner-page__container">
          <h2 className="partner-page__subtitle">Оферта</h2>
        </div>
      </section>

      <section className="partner-page__section partner-page__section--form">
        <div className="partner-page__container">
          <form
            className="partner-form"
            action={FORM_ACTION}
            method="post"
            data-open-new-window="0"
            data-sequential-request="1"
          >
            <input
              type="hidden"
              name="formParams[setted_offer_id]"
              className="external-value offer_id"
            />
            <input type="hidden" name="formParams[willCreatePaidDeal]" value="0" />
            <input
              type="hidden"
              name="__gc__internal__form__helper"
              value={ORIGINAL_PAGE_URL}
            />
            <input type="hidden" name="__gc__internal__form__helper_ref" value="" />
            <input
              type="hidden"
              name="formParams[userCustomFields][13765252]"
              defaultValue={hiddenFields.ambassadorId}
            />
            <input
              type="hidden"
              name="formParams[userCustomFields][13765328]"
              defaultValue={hiddenFields.telegramId}
            />

            <h2 className="partner-form__title">
              Зарегистрируйтесь, чтобы получить промокод амбассадора
            </h2>

            <label className="partner-form__field">
              <span className="partner-form__label">Электронная почта</span>
              <input
                className="partner-form__input"
                type="email"
                name="formParams[email]"
                maxLength={60}
                placeholder="Введите ваш эл. адрес"
                required
              />
            </label>

            <label className="partner-form__field">
              <span className="partner-form__label">Имя</span>
              <input
                className="partner-form__input"
                type="text"
                name="formParams[full_name]"
                maxLength={60}
                placeholder="Введите ваше имя"
                required
              />
            </label>

            <label className="partner-form__field">
              <span className="partner-form__label">Телефон</span>
              <input
                className="partner-form__input"
                type="tel"
                name="formParams[phone]"
                maxLength={60}
                placeholder="Введите ваш телефон"
                required
              />
            </label>

            <button className="partner-form__button" type="submit">
              Получить промокод
            </button>

            <p className="partner-form__note">
              Ваш партнёрский код придёт вам на почту в течение 10 минут после
              заполнения формы.
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}
