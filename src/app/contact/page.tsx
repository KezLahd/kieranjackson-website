'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1a1a1a]">
      <section className="min-h-[85vh] flex items-center justify-center border-b border-[#1C2C27] bg-gradient-to-b from-black via-[#0A1512] to-[#1C2C27] pt-16 pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[#e0e0e0] mb-8 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get in Touch
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#a0a0a0] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#1C4C2C] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#1C4C2C]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#a0a0a0] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#1C4C2C] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#1C4C2C]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#a0a0a0] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#1C4C2C] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#1C4C2C]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#a0a0a0] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#1C4C2C] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#1C4C2C]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-[#1C4C2C] via-[#2C6C3C] to-[#1C4C2C] rounded-xl hover:opacity-90 transition-all duration-300 border border-[#1C4C2C]/50 shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 