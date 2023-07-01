'use client'
import clsx from 'clsx'
import { CardProps } from './card.type'
import { motion, useMotionTemplate, useSpring } from 'framer-motion'

export function Card({ children, className, color = 'zinc' }: CardProps) {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 })

  const onMouseMove = ({ currentTarget, clientX, clientY }: any) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`
  const style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div
      onMouseMove={onMouseMove}
      className={clsx(
        'group relative overflow-hidden rounded-xl border  duration-700 hover:bg-zinc-800/10 md:gap-8',
        className,
        {
          'border-zinc-600 hover:border-zinc-400/50': color === 'zinc',
          'border-purple-500 shadow hover:border-purple-500 hover:shadow-purple-400':
            color === 'purple',
        }
      )}
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br via-zinc-100/10 opacity-100 transition duration-1000 group-hover:opacity-50 "
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>

      {children}
    </div>
  )
}
