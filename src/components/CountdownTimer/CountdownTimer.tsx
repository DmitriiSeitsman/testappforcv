import { useEffect, useMemo, useState } from 'react'
import './CountdownTimer.css'

const SALE_END_DATE = new Date('2026-06-21T23:59:59+03:00')

function declensionDays(days: number) {
  const mod10 = days % 10
  const mod100 = days % 100

  if (mod10 === 1 && mod100 !== 11) return 'день'
  if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return 'дня'
  return 'дней'
}

function pad2(value: number) {
  return String(value).padStart(2, '0')
}

function computeParts(nowMs: number) {
  const diffMs = Math.max(0, SALE_END_DATE.getTime() - nowMs)
  const totalSeconds = Math.floor(diffMs / 1000)

  const days = Math.floor(totalSeconds / (24 * 60 * 60))
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60))
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds, expired: diffMs === 0 }
}

export function CountdownTimer() {
  const initialNow = useMemo(() => Date.now(), [])
  const [nowMs, setNowMs] = useState(initialNow)

  useEffect(() => {
    const id = window.setInterval(() => setNowMs(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const { days, hours, minutes, seconds, expired } = computeParts(nowMs)

  return (
    <div
      className={`countdown__value ${expired ? 'expired countdown__value--expired' : ''}`}
    >
      {days} {declensionDays(days)} {pad2(hours)}:{pad2(minutes)}:{pad2(seconds)}
    </div>
  )
}
