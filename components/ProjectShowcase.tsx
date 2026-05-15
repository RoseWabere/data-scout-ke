'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    name: 'Safari Scout',
    description: 'AI-powered travel intelligence platform',
    screenshot: '/projects/safari-scout.png',
    tech: 'LangChain • Weaviate • Next.js',
  },
  {
    name: 'Kipaji Chetu',
    description: 'AI-driven talent discovery platform',
    screenshot: '/projects/kipaji-chetu.png',
    tech: 'FastAPI • PostgreSQL • Docker',
  },
  {
    name: 'Kijani Care 360 – Environmental Monitoring',
    screenshot: '/projects/kijani-care.png',
    tech: 'PostGIS • FastAPI • React'
  },
]

export default function ProjectShowcase() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % projects.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <div
      className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[450px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl overflow-hidden border border-border-subtle shadow-2xl bg-black/20 backdrop-blur"
        >
          {/* Image */}
          <div className="relative h-[450px]">
            <Image
              src={projects[index].screenshot}
              alt={projects[index].name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 p-4">
            <div className="text-white font-semibold text-lg">
              {projects[index].name}
            </div>
            <div className="text-sm text-gray-300 mb-1">
              {projects[index].description}
            </div>
            <div className="text-xs text-gray-400">
              {projects[index].tech}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-primary' : 'w-2 bg-gray-400/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}