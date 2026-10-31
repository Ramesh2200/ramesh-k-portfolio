import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    const firstName = form?.firstName?.value?.trim() || ''
    const lastName = form?.lastName?.value?.trim() || ''
    const email = form?.email?.value?.trim() || ''
    const message = form?.message?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      // Fallback: Mailto link opening email client
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )}`
      window.open(mailtoUrl, '_blank')
      setStatus('success')
      formRef.current?.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      formRef.current?.reset()
    } catch (err) {
      console.error('Email sending failed:', err)
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Parallax Typography (Not an h1) */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Foreground Red Card Aligned to Right */}
      <div className="relative z-10 w-full flex justify-end">
        <div
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 rounded-tl-3xl shadow-2xl"
          data-aos="fade-up"
        >
          {/* Header Row */}
          <div className="flex justify-between items-center pb-6 border-b border-white/20">
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-white/90">
              Reach Me
            </span>
            <a
              href={socialLinks.instagram || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#ff2a2a] font-bold text-xs uppercase tracking-wider transition-all duration-200"
            >
              DM on Instagram
            </a>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 mt-12"
          >
            {/* Input Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: Underline-Only Inputs */}
              <div className="flex flex-col space-y-8">
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  required
                  placeholder="First Name *"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Last Name"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  placeholder="Email Address *"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>

              {/* Right Column: Textarea */}
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white resize-none min-h-[140px] transition-colors"
                />
              </div>
            </div>

            {/* Bottom Controls & Notes */}
            <div className="space-y-4 pt-4 border-t border-white/20">
              {/* Permission Checkbox */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="w-4 h-4 accent-black rounded cursor-pointer"
                />
                <label
                  htmlFor="consent"
                  className="text-white/80 text-xs md:text-sm cursor-pointer select-none"
                >
                  I agree to send my details for project inquiries and communications.
                </label>
              </div>

              {/* Note */}
              <p className="text-white/80 text-xs md:text-sm">
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>

              {/* Urgent Mailto Link */}
              <p className="text-white/90 text-xs md:text-sm">
                Need a faster response? Reach me directly at{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline font-bold text-white hover:text-black transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
              </p>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`rounded-full px-8 py-3.5 font-bold transition-all duration-300 inline-flex items-center gap-2 select-none ${
                    status === 'sending'
                      ? 'bg-white/30 border border-white/40 text-white cursor-wait'
                      : status === 'success'
                        ? 'bg-emerald-600 border border-emerald-400 text-white'
                        : status === 'error'
                          ? 'bg-red-950 border border-red-700 text-white'
                          : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#ff2a2a] group cursor-pointer'
                  }`}
                >
                  {status === 'sending' && (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  )}

                  {status === 'success' && <span>Sent Successfully ✓</span>}

                  {status === 'error' && <span>Failed — Try Again</span>}

                  {status === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="w-4 h-4 stroke-current fill-none group-hover:translate-x-1.5 transition-transform duration-200"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
