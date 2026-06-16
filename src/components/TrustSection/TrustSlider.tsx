import { useEffect, useRef } from 'react'
import './TrustSlider.css'

const SLIDER_IMAGES = Array.from({ length: 9 }, (_, index) => ({
  src: `/assets/images/${index + 1}.png`,
  alt: `Результат ученицы ${index + 1}`,
}))

export function TrustSlider() {
  const viewportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    viewport.scrollLeft = 0
  }, [])

  return (
    <div className="trust-slider">
      <div className="trust-slider__viewport" ref={viewportRef}>
        <div className="trust-slider__track">
          {SLIDER_IMAGES.map(({ src, alt }) => (
            <div className="trust-slider__slide" key={src}>
              <img
                className="trust-slider__image"
                src={src}
                alt={alt}
                width={300}
                height={300}
                loading="eager"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="trust-slider__hint">
        <span className="trust-slider__hint-text">ЛИСТАЙТЕ ВПРАВО</span>
        <img
          className="trust-slider__hint-icon"
          src="/squarecoursorright.png"
          alt=""
          width={15}
          height={15}
          aria-hidden="true"
        />
      </p>
    </div>
  )
}
