'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      organization: formData.get('organization'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
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

  const handleWhatsApp = () => {
    // Replace with your real WhatsApp number (include country code, no '+' or spaces)
    const phoneNumber = '254700000000' // CHANGE THIS
    window.open(`https://wa.me/${phoneNumber}?text=Hello%20Data%20Scout%20KE%2C%20I%27d%20like%20to%20discuss%20a%20project.`, '_blank')
  }

  return (
    <>
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
              Tell us about your data challenge. We'll respond within a few hours.
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
                  className="w-full mb-4 p-4 border bg-emerald-50 border-border-subtle rounded-lg hover:border-brand-accent/30 hover:bg-surface transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    <i className="fab fa-whatsapp text-[#25D366] text-xl"></i>
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm text-secondary">Chat with us directly</div>
                  </div>
                  <i className="fas fa-arrow-right text-secondary text-sm"></i>
                </button>

                <a
                  href="https://linkedin.com/in/rosewabere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mb-4 p-4 border border-border-subtle rounded-lg hover:border-brand-accent/30 hover:bg-surface transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#0A66C2]/10 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    <i className="fab fa-linkedin text-[#0A66C2] text-xl"></i>
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
                  className="w-full p-4 border border-border-subtle rounded-lg hover:border-brand-accent/30 hover:bg-surface transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-gray-800/10 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    <i className="fab fa-github text-gray-800 dark:text-gray-300 text-xl"></i>
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm text-secondary">github.com/Rozieroz</div>
                  </div>
                  <i className="fas fa-external-link-alt text-secondary text-sm"></i>
                </a>
              </div>

              <div className="p-6 border border-border-subtle rounded-xl" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <h4 className="font-semibold mb-3">Our Process</h4>
                <ul className="space-y-2 text-sm text-secondary">
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-xs mt-1" style={{ color: 'var(--accent)' }}></i>
                    <span>Initial consultation (free, 30 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-xs mt-1" style={{ color: 'var(--accent)' }}></i>
                    <span>Technical assessment & proposal (48 hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-xs mt-1" style={{ color: 'var(--accent)' }}></i>
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
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-border-subtle rounded-lg focus:outline-none focus:border-brand-accent transition-colors"
                    style={{ backgroundColor: 'var(--bg-surface)' }}
                    placeholder="e.g. Jane Muthoni"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-border-subtle rounded-lg focus:outline-none focus:border-brand-accent transition-colors"
                    style={{ backgroundColor: 'var(--bg-surface)' }}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-border-subtle rounded-lg focus:outline-none focus:border-brand-accent transition-colors"
                    style={{ backgroundColor: 'var(--bg-surface)' }}
                    placeholder="Company or NGO name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Tell Us About Your Project *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border-subtle rounded-lg focus:outline-none focus:border-brand-accent transition-colors resize-none"
                    style={{ backgroundColor: 'var(--bg-surface)' }}
                    placeholder="What data challenge are you trying to solve?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {formStatus === 'success' && (
                  <p className="text-sm" style={{ color: '#2E7D32' }}>✓ Message sent! We'll reply within a few hours.</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-sm text-red-600">Failed to send. Please try WhatsApp or email directly.</p>
                )}

                <p className="text-xs text-secondary">Your contact details are kept private. We don't share or sell any information.</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Icon (Bottom Right) */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20B859] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </button>
    </>
  )
}