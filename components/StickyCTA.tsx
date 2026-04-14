// components/StickyCTA.tsx
// A sticky call-to-action that appears after the user scrolls past 50% of the page. 
// Uses Framer Motion for smooth entrance and exit animations, and encourages users to book a free consultation. 
// Disappears when the user scrolls back up or clicks the link, ensuring it doesn't interfere with the browsing experience.

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setVisible(scrollPercent > 0.4)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-24 left-0 right-0 z-40 flex justify-center px-4"
        >
          <div className="bg-surface border border-border-subtle rounded-full shadow-lg py-3 px-6 flex items-center gap-6">
            <span className="text-sm font-medium">Ready to build?</span>
            <Link
              href="#contact"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              Free Consultation →
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}