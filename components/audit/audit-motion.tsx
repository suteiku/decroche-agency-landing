"use client"

import { useEffect, useRef, useState } from "react"
import type { CSSProperties, HTMLAttributes, ReactNode } from "react"

type RevealDirection = "up" | "right" | "left"

function hiddenTransform(direction: RevealDirection) {
  if (direction === "right") return "translate-x-8"
  if (direction === "left") return "-translate-x-8"
  return "translate-y-8"
}

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  className?: string
  delay?: number
  direction?: RevealDirection
  style?: CSSProperties
}

export function Reveal({ children, className = "", delay = 0, direction = "up", style, ...props }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      setIsVisible(true)
      return
    }

    const checkVisibility = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) setIsVisible(true)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    )

    checkVisibility()
    window.addEventListener("scroll", checkVisibility, { passive: true })
    window.addEventListener("resize", checkVisibility)
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", checkVisibility)
      window.removeEventListener("resize", checkVisibility)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-700 ease-out ${
        isVisible ? "translate-x-0 translate-y-0 opacity-100" : `${hiddenTransform(direction)} opacity-100`
      }`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}

export function AnimatedNumber({
  end,
  prefix = "",
  suffix = "",
  className = "",
  delay = 0,
  duration = 1600,
}: {
  end: number
  prefix?: string
  suffix?: string
  className?: string
  delay?: number
  duration?: number
}) {
  const [count, setCount] = useState(end)
  const [start, setStart] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const frameRef = useRef(0)
  const formatter = new Intl.NumberFormat("fr-FR")

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      setCount(end)
      setStart(true)
      return
    }

    const checkVisibility = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      if (rect.top < window.innerHeight * 1.35 && rect.bottom > 0) setStart(true)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true)
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    )

    checkVisibility()
    window.addEventListener("scroll", checkVisibility, { passive: true })
    window.addEventListener("resize", checkVisibility)
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", checkVisibility)
      window.removeEventListener("resize", checkVisibility)
    }
  }, [end])

  useEffect(() => {
    if (!start) return

    const timeout = window.setTimeout(() => {
      const initialValue = Math.max(1, Math.floor(end * 0.72))
      setCount(initialValue)
      const startTime = performance.now()

      const animate = () => {
        const elapsed = performance.now() - startTime
        const progress = Math.max(0, Math.min(elapsed / duration, 1))
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(Math.max(initialValue, initialValue + eased * (end - initialValue))))

        if (progress < 1) frameRef.current = window.requestAnimationFrame(animate)
      }

      frameRef.current = window.requestAnimationFrame(animate)
    }, delay)

    return () => {
      window.clearTimeout(timeout)
      window.cancelAnimationFrame(frameRef.current)
    }
  }, [delay, duration, end, start])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatter.format(count)}
      {suffix}
    </span>
  )
}
