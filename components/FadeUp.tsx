'use client'
import { useEffect, useRef, ReactNode } from 'react'

export type FadeVariant = 'up' | 'scale' | 'fade' | 'left' | 'right'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  variant?: FadeVariant
}

const EASE = 'cubic-bezier(0.16,1,0.3,1)'

const cfg: Record<FadeVariant, { opacity: string; transform: string; filter?: string; ms: number }> = {
  up: {
    opacity: '0',
    transform: 'translateY(60px)',
    filter: 'blur(8px)',
    ms: 1000,
  },
  scale: {
    opacity: '0',
    transform: 'scale(0.93) translateY(24px)',
    filter: 'blur(10px)',
    ms: 1100,
  },
  fade: {
    opacity: '0',
    transform: 'translateY(20px)',
    ms: 900,
  },
  left: {
    opacity: '0',
    transform: 'translateX(-48px)',
    filter: 'blur(6px)',
    ms: 1000,
  },
  right: {
    opacity: '0',
    transform: 'translateX(48px)',
    filter: 'blur(6px)',
    ms: 1000,
  },
}

export default function FadeUp({ children, delay = 0, className = '', variant = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0px) translateX(0px) scale(1)'
          el.style.filter = 'blur(0px)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const { opacity, transform, filter, ms } = cfg[variant]
  const transition = [
    `opacity ${ms}ms ${EASE} ${delay}ms`,
    `transform ${ms}ms ${EASE} ${delay}ms`,
    ...(filter ? [`filter ${ms}ms ${EASE} ${delay}ms`] : []),
  ].join(', ')

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity, transform, ...(filter ? { filter } : {}), transition }}
    >
      {children}
    </div>
  )
}
