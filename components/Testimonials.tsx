'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Built our full RAG pipeline in 6 weeks. The governance-first design prevented multiple compliance issues before launch.",
    name: "CTO",
    company: "Tourism Technology Company",
    initial: "CTO",
  },
  {
    quote: "Delivered a real-time compliance monitoring dashboard now used across our audit workflows.",
    name: "Head of Risk",
    company: "Regional Financial Institution",
    initial: "HR",
  },
  {
    quote: "Implemented a geospatial data system tracking over 10,000 environmental records with full auditability.",
    name: "Program Director",
    company: "Environmental Organization",
    initial: "PD",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--accent)' }}>
            Client Outcomes
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Built for data-critical environments
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="card-premium p-6"
            >
              
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--accent)' }}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-secondary">{t.company}</div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-secondary leading-relaxed italic">
                “{t.quote}”
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}