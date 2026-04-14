// components/HeroArchitecture.tsx
// for the Hero section, showcasing rotating architecture diagrams of our projects. 
// It uses Framer Motion for smooth transitions and is designed to be visually engaging 
// without distracting from the main content.
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const diagrams = [
  {
    name: 'RAG Pipeline – Safari Scout',
    svg: '/diagrams/rag-pipeline.svg', // place your actual SVG in public/
    description: 'LangChain + Weaviate + FastAPI'
  },
  {
    name: 'Geospatial ETL – Kijani Care',
    svg: '/diagrams/geospatial-etl.svg',
    description: 'PostGIS + FastAPI + React'
  },
  {
    name: 'Compliance Analytics – Bank',
    svg: '/diagrams/compliance-analytics.svg',
    description: 'dbt + Power BI + PostgreSQL'
  }
]

export default function HeroArchitecture() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % diagrams.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-2xl hidden lg:block pointer-events-none opacity-30">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Placeholder for SVG diagram – replace with actual <img> or embedded SVG */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <div className="aspect-video bg-gradient-to-br from-brand-accent/10 to-transparent rounded-lg flex items-center justify-center">
              <span className="text-white/50 text-sm">{diagrams[currentIndex].name}</span>
            </div>
            <div className="mt-2 text-center text-white/40 text-xs">{diagrams[currentIndex].description}</div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}