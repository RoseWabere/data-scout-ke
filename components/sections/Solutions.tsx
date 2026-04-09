'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const solutions = [
  {
    icon: 'fa-database',
    title: 'Real-Time Data Pipelines',
    description: 'ETL/ELT systems that ingest, transform, and serve data at scale. Apache Airflow orchestration, dbt transformations, PostgreSQL/Redis storage.',
    features: ['Batch & Stream Processing', 'Data Quality Monitoring', 'Automated Scheduling'],
  },
  {
    icon: 'fa-brain',
    title: 'AI Decision Systems',
    description: 'RAG pipelines, LangChain orchestration, vector databases. Turn unstructured data into intelligent recommendations.',
    features: ['Semantic Search', 'LLM Integration', 'Custom Training'],
  },
  {
    icon: 'fa-chart-line',
    title: 'Analytics Dashboards',
    description: 'Power BI, Grafana, custom React dashboards. Real-time visualization of your critical business metrics.',
    features: ['Interactive Visualizations', 'Automated Reports', 'Mobile Responsive'],
  },
  {
    icon: 'fa-shield-alt',
    title: 'Compliance Analytics',
    description: 'Governance-aware systems for banking, NGOs, public sector. Automated compliance reporting and alerting.',
    features: ['Regulatory Monitoring', 'Audit Trails', 'Risk Scoring'],
  },
  {
    icon: 'fa-globe-africa',
    title: 'Geospatial Data Systems',
    description: 'PostGIS pipelines, location intelligence, mapping platforms. Built for African context and infrastructure.',
    features: ['PostGIS Integration', 'Map Visualizations', 'Location Analytics'],
  },
  {
    icon: 'fa-cogs',
    title: 'Custom Integrations',
    description: 'API development, system integrations, data migrations. Connect your existing tools into unified workflows.',
    features: ['REST/GraphQL APIs', 'Third-Party Integrations', 'Data Migration'],
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-brand-teal uppercase tracking-wider mb-4">
            What We Build
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Solutions
          </h2>
          <p className="text-business-600 text-lg max-w-2xl mx-auto">
            Production-grade systems across the entire data and AI lifecycle.
            Built for enterprises that demand governance and reliability.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-premium p-6 hover:border-brand-teal/30 group"
            >
              <div className="w-14 h-14 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-teal/20 transition-colors">
                <i className={`fas ${solution.icon} text-2xl text-brand-teal`} />
              </div>

              <h3 className="font-display text-xl font-bold text-brand-navy mb-3">
                {solution.title}
              </h3>

              <p className="text-business-600 text-sm leading-relaxed mb-4">
                {solution.description}
              </p>

              <ul className="space-y-2 mb-4">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-business-700">
                    <i className="fas fa-check text-brand-teal text-xs" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA with Next.js Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-brand-teal hover:bg-brand-teal-light text-white rounded-lg font-semibold transition-all"
          >
            Book Free Consultation →
          </Link>
        </motion.div>

      </div>
    </section>
  )
}