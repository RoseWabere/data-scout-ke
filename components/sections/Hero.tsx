'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroVisual from '../HeroVisual'
import ProjectShowcase from '../ProjectShowcase'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 opacity-90 pointer-events-none">
        <HeroVisual />
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 relative z-20 pt-24 pb-12 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-half mb-6">
            <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
              Global Delivery · Enterprise-Grade Systems
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Data systems that understand{' '}
            <span style={{ color: 'var(--accent)' }}>
              governance, risk, and production
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed">
            Production-grade data engineering and AI systems built for reliability,
            compliance, and scale. Trusted by organizations that cannot afford failure.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="#solutions" className="btn-primary">
              View Solutions
            </Link>
            <Link href="#contact" className="btn-outline">
              Book Free Consultation →
            </Link>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 border-t border-border-subtle pt-8">
            <div>
              <div className="text-3xl font-display font-bold">8+</div>
              <div className="text-sm text-secondary">Production Systems</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold">100%</div>
              <div className="text-sm text-secondary">Governance-First</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold">95%</div>
              <div className="text-sm text-secondary">Client Retention</div>
            </div>
          </div>

        </motion.div>

        {/* RIGHT: VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10"
        >
          <ProjectShowcase />
        </motion.div>

      </div>
    </section>
  )
}