'use client'

import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'Safari Scout — AI Travel Intelligence',
    industry: 'Tourism',
    challenge: 'Travelers spent 10+ hours researching Kenya safari options across fragmented sources.',
    solution: 'Built RAG pipeline with LangChain + Weaviate processing 2,000+ curated experiences. Semantic search enables context-aware recommendations.',
    results: [
      '70% reduction in research time',
      '94% retrieval accuracy',
      '12 tour operators integrated',
    ],
    tech: ['LangChain', 'Weaviate', 'FastAPI', 'Next.js'],
    link: 'https://safari-scouts.vercel.app',
  },
  {
    title: 'Bank Compliance Analytics',
    industry: 'Financial Services',
    challenge: 'Manual compliance reporting consumed 20+ hours weekly. Regulatory breach detection was reactive.',
    solution: 'Power BI dashboards with dbt transformations. Real-time monitoring of Kenyan banking regulations with automated alerting.',
    results: [
      '95% reduction in manual reporting',
      'Real-time breach detection',
      '100% audit trail compliance',
    ],
    tech: ['Power BI', 'dbt', 'PostgreSQL', 'Python'],
  },
  {
    title: 'Kijani Care 360 — Environmental Monitoring',
    industry: 'Environmental / NGO',
    challenge: 'Tree planting initiatives lacked centralized monitoring. Impact reporting was manual and delayed.',
    solution: 'Geospatial ETL pipeline with PostgreSQL/PostGIS. Real-time dashboards tracking 10,000+ planting records across Kenya.',
    results: [
      '10K+ records monitored in real-time',
      '80% faster impact reporting',
      'Enabled data-driven planning',
    ],
    tech: ['FastAPI', 'PostgreSQL', 'PostGIS', 'React'],
    link: 'https://kijanicare-360.vercel.app',
  },
  {
    title: 'Market Research AI Assistant',
    industry: 'Consulting / Retail',
    challenge: 'Processing 1,000+ market reports manually. Insight extraction took weeks.',
    solution: 'LangChain + OpenAI Function Calling pipeline. Automated analysis identified market trends and opportunities.',
    results: [
      '60% reduction in research time',
      '12 new market niches identified',
      '$150K additional revenue potential',
    ],
    tech: ['LangChain', 'OpenAI API', 'FastAPI', 'Python'],
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-business-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-brand-teal uppercase tracking-wider mb-4">
            Proven Results
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Case Studies
          </h2>
          <p className="text-business-600 text-lg max-w-2xl mx-auto">
            Real systems delivering measurable business outcomes across tourism, 
            finance, NGO, and retail sectors.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-business p-8"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-display text-2xl font-bold text-brand-navy">
                        {study.title}
                      </h3>
                      {study.link && (
                        <a
                          href={study.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-teal hover:text-brand-teal-light"
                        >
                          <i className="fas fa-external-link-alt text-sm"></i>
                        </a>
                      )}
                    </div>
                    <div className="inline-block px-3 py-1 bg-brand-teal/10 border border-brand-teal/20 rounded-full text-sm font-medium text-brand-teal">
                      {study.industry}
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-business-500 uppercase tracking-wider mb-2">
                      Challenge
                    </h4>
                    <p className="text-business-700 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-business-500 uppercase tracking-wider mb-2">
                      Solution
                    </h4>
                    <p className="text-business-700 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-business-100 border border-business-200 rounded text-xs text-business-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Results */}
                <div>
                  <h4 className="text-sm font-semibold text-business-500 uppercase tracking-wider mb-4">
                    Results
                  </h4>
                  <div className="space-y-3">
                    {study.results.map((result, i) => (
                      <div
                        key={i}
                        className="p-4 bg-brand-teal/5 border border-brand-teal/20 rounded-lg"
                      >
                        <div className="flex items-start gap-3">
                          <i className="fas fa-chart-line text-brand-teal mt-1"></i>
                          <div className="text-sm text-business-800 leading-relaxed">
                            {result}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
