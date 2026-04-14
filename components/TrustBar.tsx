'use client'

import { motion } from 'framer-motion'

const trustSignals = [
  { metric: '10+', label: 'Data systems designed' },
  { metric: '99.9%', label: 'Pipeline reliability target' },
  { metric: '4+', label: 'Industries supported' },
  { metric: 'End-to-end', label: 'Governance coverage' },
]

export default function TrustBar() {
  return (
    <div className="border-y border-border-subtle py-8 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        
        {/* Headline */}
        <p className="text-center text-sm text-secondary uppercase tracking-wider mb-6">
          Trusted in data-critical environments
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {trustSignals.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="font-display text-2xl md:text-3xl font-semibold text-primary">
                {item.metric}
              </div>
              <div className="text-xs md:text-sm text-secondary mt-1">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}