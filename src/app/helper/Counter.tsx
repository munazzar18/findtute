'use client'
import React, { useState, useEffect } from 'react'

// Define the props type
interface CounterProps {
  start: number
  end: number
  duration?: number // Optional, with a default value
}

// Ease-out function
const easeOutQuad = (t: number): number => t * (2 - t)

const Counter: React.FC<CounterProps> = ({ start, end, duration = 5000 }) => {
  const [count, setCount] = useState<number>(start)

  useEffect(() => {
    let startTimestamp: number | null = null

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const easedProgress = easeOutQuad(progress)
      setCount(Math.floor(easedProgress * (end - start) + start))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [start, end, duration])

  // Format the number with commas
  const formattedCount = count.toLocaleString()

  return <div>{formattedCount}</div>
}

export default Counter
