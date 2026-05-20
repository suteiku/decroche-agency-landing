"use client"

import { useEffect, useRef } from "react"

export function AnimatedSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const chars = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯"
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let time = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, rect.width * dpr)
      canvas.height = Math.max(1, rect.height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const render = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const radius = Math.min(rect.width, rect.height) * 0.525

      ctx.font = "12px monospace"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      const points: { x: number; y: number; z: number; char: string }[] = []

      for (let phi = 0; phi < Math.PI * 2; phi += 0.15) {
        for (let theta = 0; theta < Math.PI; theta += 0.15) {
          const x = Math.sin(theta) * Math.cos(phi + time * 0.5)
          const y = Math.sin(theta) * Math.sin(phi + time * 0.5)
          const z = Math.cos(theta)

          const rotY = time * 0.3
          const newX = x * Math.cos(rotY) - z * Math.sin(rotY)
          const newZ = x * Math.sin(rotY) + z * Math.cos(rotY)

          const rotX = time * 0.2
          const newY = y * Math.cos(rotX) - newZ * Math.sin(rotX)
          const finalZ = y * Math.sin(rotX) + newZ * Math.cos(rotX)

          const depth = (finalZ + 1) / 2
          const charIndex = Math.floor(depth * (chars.length - 1))

          points.push({
            x: centerX + newX * radius,
            y: centerY + newY * radius,
            z: finalZ,
            char: chars[charIndex],
          })
        }
      }

      points.sort((a, b) => a.z - b.z)

      points.forEach((point) => {
        const alpha = 0.2 + (point.z + 1) * 0.4
        const depthFactor = (point.z + 1) / 2
        const hue = 200 + depthFactor * 70
        const saturation = 60 + depthFactor * 10
        const lightness = 55 - depthFactor * 10
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
        ctx.fillText(point.char, point.x, point.y)
      })

      if (reduceMotion) return
      time += 0.02
      frameRef.current = window.requestAnimationFrame(render)
    }

    resize()
    render()
    window.addEventListener("resize", resize, { passive: true })

    return () => {
      window.removeEventListener("resize", resize)
      window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="h-full w-full" style={{ display: "block" }} aria-hidden="true" />
}
