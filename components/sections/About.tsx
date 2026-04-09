'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-brand-teal uppercase tracking-wider mb-4">
            Who We Are
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            About Data Scout KE
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-business p-8"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-brand-teal/20 rounded-full flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-brand-teal">RW</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-navy">Rose Wabere</h3>
                <div className="text-business-600">Founder & Lead Data Engineer</div>
              </div>
            </div>

            <p className="text-business-700 leading-relaxed mb-4">
              Data Scout KE is a specialist data engineering and AI consultancy built on a rare 
              combination: production-grade systems expertise paired with a criminology and 
              security studies background.
            </p>

            <p className="text-business-700 leading-relaxed mb-6">
              We build data systems that understand the risk, governance, and human context they 
              operate in. 4+ years delivering production ETL/ELT systems, ML-integrated data 
              platforms, and AI applications across public sector, NGO, and commercial environments.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {['Python', 'SQL', 'PySpark', 'dbt', 'Airflow', 'LangChain', 'FastAPI', 'Power BI', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-brand-teal/10 border border-brand-teal/20 rounded-full text-sm text-brand-teal"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-business-200">
              <a
                href="https://rose-wabere.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-teal-light font-medium"
              >
                View Personal Portfolio
                <i className="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
          </motion.div>

          {/* Why Different */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 bg-gradient-to-br from-brand-teal/5 to-transparent border border-brand-teal/20 rounded-xl">
              <h4 className="font-display text-xl font-bold text-brand-navy mb-3">
                Why We're Different
              </h4>
              <p className="text-business-700 leading-relaxed italic">
                "The combination of data engineering and governance thinking is what makes our 
                systems different. Most engineers can build a pipeline. We build pipelines that 
                understand what happens when the data is wrong."
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-shield-alt text-brand-teal text-xl"></i>
                </div>
                <div>
                  <h5 className="font-semibold text-brand-navy mb-1">Governance-Aware</h5>
                  <p className="text-sm text-business-600 leading-relaxed">
                    Systems designed with compliance, audit trails, and risk management built in from day one.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-globe-africa text-brand-teal text-xl"></i>
                </div>
                <div>
                  <h5 className="font-semibold text-brand-navy mb-1">Africa-First</h5>
                  <p className="text-sm text-business-600 leading-relaxed">
                    Built for African infrastructure, regulations, and business context. Not generic imports.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-rocket text-brand-teal text-xl"></i>
                </div>
                <div>
                  <h5 className="font-semibold text-brand-navy mb-1">Production-Ready</h5>
                  <p className="text-sm text-business-600 leading-relaxed">
                    No prototypes. Every system ships with monitoring, error handling, and documentation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-handshake text-brand-teal text-xl"></i>
                </div>
                <div>
                  <h5 className="font-semibold text-brand-navy mb-1">Partnership Model</h5>
                  <p className="text-sm text-business-600 leading-relaxed">
                    We don't just deliver and disappear. We build, deploy, and support.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-business-200"
        >
          <h3 className="font-display text-2xl font-bold text-brand-navy mb-8 text-center">
            Industries We Serve
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'fa-building', name: 'Financial Services' },
              { icon: 'fa-hands-helping', name: 'NGOs & Public Sector' },
              { icon: 'fa-plane-departure', name: 'Tourism & Hospitality' },
              { icon: 'fa-shopping-cart', name: 'Retail & E-commerce' },
            ].map((industry, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white border border-business-200 rounded-xl hover:border-brand-teal/30 transition-all"
              >
                <i className={`fas ${industry.icon} text-3xl text-brand-teal mb-3`}></i>
                <div className="font-semibold text-brand-navy">{industry.name}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
