'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="px-5 py-2 bg-brand-accent hover:bg-brand-accent/80 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white text-2xl"
            aria-label="Open menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-brand-navy-dark border-l border-white/10 z-50 md:hidden flex flex-col"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-2xl"
                  aria-label="Close menu"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="flex flex-col gap-6 px-6 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white/80 hover:text-white transition-colors text-base font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 px-5 py-2 bg-brand-accent hover:bg-brand-accent/80 text-white rounded-lg text-sm font-semibold transition-colors text-center"
                >
                  Book Free Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}