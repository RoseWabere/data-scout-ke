'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', organization: '', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
  }

  const handleWhatsApp = () => {
    // Replace with your real WhatsApp number (international format, no plus)
    const phoneNumber = '254700000000' // CHANGE THIS
    window.open(`https://wa.me/${phoneNumber}?text=Hello%20Data%20Scout%20KE%2C%20I%27d%20like%20to%20discuss%20a%20project.`, '_blank')
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--accent)' }}>
            Work With Us
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Start Your Project</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
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
            <div className="card-premium p-6">
              <h3 className="font-display text-xl font-bold mb-6">Get In Touch</h3>

              <button
                onClick={handleWhatsApp}
                className="w-full mb-4 p-4 rounded-lg transition-all flex items-center gap-4 group"
                style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)', border: '1px solid rgba(37, 211, 102, 0.3)' }}
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fab fa-whatsapp text-white text-xl"></i>
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm text-secondary">Chat with us directly</div>
                </div>
                <i className="fas fa-arrow-right text-emerald-600"></i>
              </button>

              <a
                href="https://linkedin.com/in/rosewabere"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mb-4 p-4 border border-border-subtle rounded-lg hover:border-brand-accent/30 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fab fa-linkedin text-blue-600 text-xl"></i>
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-secondary">linkedin.com/in/rosewabere</div>
                </div>
                <i className="fas fa-external-link-alt text-secondary text-sm"></i>
              </a>

              <a
                href="https://github.com/Rozieroz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 border border-border-subtle rounded-lg hover:border-brand-accent/30 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fab fa-github text-gray-800 text-xl"></i>
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold">GitHub</div>
                  <div className="text-sm text-secondary">github.com/Rozieroz</div>
                </div>
                <i className="fas fa-external-link-alt text-secondary text-sm"></i>
              </a>
            </div>

            {/* Process */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(74, 107, 138, 0.08)', border: '1px solid rgba(74, 107, 138, 0.2)' }}>
              <h4 className="font-semibold mb-3">Our Process</h4>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check mt-1" style={{ color: 'var(--accent)' }}></i>
                  <span>Initial consultation (free, 30 minutes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check mt-1" style={{ color: 'var(--accent)' }}></i>
                  <span>Technical assessment & proposal (48 hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check mt-1" style={{ color: 'var(--accent)' }}></i>
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
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-subtle rounded-lg focus:outline-none focus:border-brand-accent bg-surface"
                  placeholder="e.g. Jane Muthoni"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-subtle rounded-lg focus:outline-none focus:border-brand-accent bg-surface"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-2">Organization</label>
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-subtle rounded-lg focus:outline-none focus:border-brand-accent bg-surface"
                  placeholder="Company or NGO name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Tell Us About Your Project *</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border-subtle rounded-lg focus:outline-none focus:border-brand-accent bg-surface resize-none"
                  placeholder="What data challenge are you trying to solve? What are your goals?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <p className="text-emerald-600 text-sm">Message sent! We'll get back to you within a few hours.</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-sm">Failed to send. Please try again or WhatsApp us directly.</p>
              )}

              <p className="text-xs text-secondary">
                Your contact details are kept private. We don't share or sell any information.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Fixed WhatsApp Icon */}
      {/* <a
        href="https://wa.me/254708486104" // REPLACE NUMBER
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a> */}
    </section>
  )
}