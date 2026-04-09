'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleWhatsApp = () => {
    const parts = ['2547', '00000', '000']
    window.open(
      `https://wa.me/${parts.join('')}?text=Hello%20Data%20Scout%20KE%2C%20I%27d%20like%20to%20discuss%20a%20project.`,
      '_blank'
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setFormStatus('success')
        e.currentTarget.reset()
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-business-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-brand-teal uppercase tracking-wider mb-4">
            Work With Us
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Start Your Project
          </h2>
          <p className="text-business-600 text-lg max-w-2xl mx-auto">
            Tell us about your data challenge. We'll respond within a few hours with an initial assessment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-business p-6">
              <h3 className="font-display text-xl font-bold text-brand-navy mb-6">
                Get In Touch
              </h3>

              {/* <button
                onClick={handleWhatsApp}
                className="w-full mb-4 p-4 bg-emerald-50 border-2 border-emerald-200 rounded-lg hover:bg-emerald-100 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fab fa-whatsapp text-white text-xl"></i>
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-brand-navy">WhatsApp</div>
                  <div className="text-sm text-business-600">Chat with us directly</div>
                </div>
                <i className="fas fa-arrow-right text-emerald-600"></i>
              </button> */}

              <a
                href="https://linkedin.com/in/rosewabere"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mb-4 p-4 border-2 border-business-200 rounded-lg hover:border-brand-teal/30 hover:bg-business-50 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fab fa-linkedin text-blue-600 text-xl"></i>
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-brand-navy">LinkedIn</div>
                  <div className="text-sm text-business-600">linkedin.com/in/rosewabere</div>
                </div>
                <i className="fas fa-external-link-alt text-business-400 text-sm"></i>
              </a>

              <a
                href="https://github.com/Rozieroz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 border-2 border-business-200 rounded-lg hover:border-brand-teal/30 hover:bg-business-50 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-business-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fab fa-github text-business-800 text-xl"></i>
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-brand-navy">GitHub</div>
                  <div className="text-sm text-business-600">github.com/Rozieroz</div>
                </div>
                <i className="fas fa-external-link-alt text-business-400 text-sm"></i>
              </a>
            </div>

            {/* Engagement Info */}
            <div className="p-6 bg-brand-teal/5 border border-brand-teal/20 rounded-xl">
              <h4 className="font-semibold text-brand-navy mb-3">Our Process</h4>
              <ul className="space-y-2 text-sm text-business-700">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-brand-teal mt-1"></i>
                  <span>Initial consultation (free, 30 minutes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-brand-teal mt-1"></i>
                  <span>Technical assessment & proposal (48 hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-brand-teal mt-1"></i>
                  <span>Build, deploy, support</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-business-200 rounded-lg focus:border-brand-teal focus:outline-none"
                  placeholder="e.g. Jane Muthoni"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-business-200 rounded-lg focus:border-brand-teal focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-brand-navy mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 border-2 border-business-200 rounded-lg focus:border-brand-teal focus:outline-none"
                  placeholder="Company or NGO name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-business-200 rounded-lg focus:border-brand-teal focus:outline-none resize-none"
                  placeholder="What data challenge are you trying to solve? What are your goals?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full px-8 py-4 bg-brand-teal hover:bg-brand-teal-light text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <p className="text-emerald-600 text-sm">
                  Message sent! We'll get back to you within a few hours.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-sm">
                  Failed to send. Please try WhatsApp instead.
                </p>
              )}

              <p className="text-xs text-business-500">
                Your contact details are kept private. We don't share or sell any information.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
