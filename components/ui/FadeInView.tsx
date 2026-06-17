'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface FadeInViewProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
}

export default function FadeInView({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  direction = 'up',
  once = true,
}: FadeInViewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px 0px' })

  const initial: { opacity: number; x?: number; y?: number } = { opacity: 0 }
  if (direction === 'up')    initial.y = 40
  if (direction === 'down')  initial.y = -40
  if (direction === 'left')  initial.x = 40
  if (direction === 'right') initial.x = -40

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
