'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background – use warm light mode default, dark mode handled by body bg */}
      {/* <div className="absolute inset-0 grid-pattern pointer-events-none"></div> */}
      {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl"></div> */}

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          {/* Badge – static, no pulse, premium */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-half mb-8">
            {/* <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span> */}
            <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
              Global Delivery · Enterprise-Grade
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Data systems that understand{' '}
            <span style={{ color: 'var(--accent)' }}>governance, risk, and production</span>
            {/* <span className="text-brand-navy">governance, risk, and people</span> */}
          </h1>

          <p className="text-xl text-secondary mb-10 max-w-2xl leading-relaxed">
            Production-grade data engineering and AI systems built with compliance in your DNA.
            Trusted by organizations that can't afford data failures.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link href="#solutions" className="btn-primary">
              View Solutions
            </Link>
            <Link href="#contact" className="btn-outline">
              Book Free Consultation →
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="pt-12 border-t border-border-subtle grid grid-cols-3 gap-8"
          >
            <div>
              <div className="text-4xl font-display font-bold mb-1">8+</div>
              <div className="text-sm text-secondary">Production Systems</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-1">100%</div>
              <div className="text-sm text-secondary">Governance-First</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-1">95%</div>
              <div className="text-sm text-secondary">Client Retention</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}