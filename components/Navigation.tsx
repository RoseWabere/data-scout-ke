'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-navy-dark/95 backdrop-blur-sm' : 'bg-brand-navy-dark'
      } border-b border-white/10`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl font-bold text-white">
          Data<span className="text-brand-accent">Scout</span> KE
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {['Solutions', 'Case Studies', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {item}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="px-5 py-2 bg-brand-accent hover:bg-brand-accent/80 text-white rounded-lg text-sm font-semibold transition-colors"
        >
          Book Free Consultation
        </Link>
      </div>
    </motion.nav>
  )
}