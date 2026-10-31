import { useState } from 'react'
import { motion } from 'framer-motion'
import stackImage from '../assets/about/profile.png'
import qrCode from '../assets/about/qr-code.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative 4-point-star: Top-Right */}
      <svg
        className="absolute top-12 right-12 w-8 h-8 text-black opacity-30 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Decorative 4-point-star: Bottom-Left */}
      <svg
        className="absolute bottom-32 left-10 w-8 h-8 text-black opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Main Content Wrapper */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left: ID Badge on a Lanyard (Framer Motion) */}
        <div className="md:w-[350px] shrink-0 w-full flex flex-col items-center">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: 'spring',
              stiffness: 110,
              damping: 9,
              mass: 1.1,
            }}
            className="relative flex flex-col items-center"
          >
            {/* Black Lanyard String */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black z-0 pointer-events-none" />

            {/* Silver Clip Rectangle */}
            <div className="w-8 h-6 bg-gradient-to-b from-gray-200 to-gray-400 rounded-sm mx-auto -mb-2 relative z-30 shadow-md border border-gray-300" />

            {/* Flippable 3D Card Container */}
            <div
              className="max-w-[310px] w-[310px] -rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer relative z-10"
              style={{ perspective: 1200 }}
              onClick={() => setIsFlipped(!isFlipped)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsFlipped(!isFlipped)
                }
              }}
              aria-label="Click to flip ID badge between photo and visiting card with QR scanner"
            >
              <div
                className="relative w-full transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front Side: ID Photo Badge */}
                <div className="bg-[#141414] border-2 border-red-950/60 rounded-[2.5rem] p-4 shadow-2xl [backface-visibility:hidden]">
                  {/* Card Cutout Slot */}
                  <div className="w-12 h-2 bg-gray-800 rounded-full mx-auto mb-3" />

                  {/* Card Photo */}
                  <img
                    src={stackImage}
                    alt="RAMESH K — Java Full Stack Developer, TAP Academy student"
                    className="w-full aspect-[3/4] rounded-2xl object-cover object-top shadow-inner"
                  />
                  <div className="mt-3 text-center">
                    <p className="text-white/70 text-xs font-mono font-medium">
                      {personalInfo.brandName}
                    </p>
                  </div>
                </div>

                {/* Back Side: Visiting Card with Scanner Code */}
                <div className="absolute inset-0 bg-[#141414] border-2 border-red-950/60 rounded-[2.5rem] p-6 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between text-white select-none">
                  <div>
                    {/* Top Cutout Slot */}
                    <div className="w-12 h-2 bg-gray-800 rounded-full mx-auto mb-3" />

                    {/* Name & Title */}
                    <h3 className="text-2xl font-black tracking-tight text-white flex items-center">
                      {personalInfo.brandName}
                      <span className="text-[#ff2a2a] ml-0.5">.</span>
                    </h3>
                    <p className="text-[#ff5252] text-xs font-mono font-bold tracking-[0.16em] uppercase mt-1">
                      {personalInfo.title}
                    </p>

                    {/* Divider Line */}
                    <div className="border-b border-white/10 my-4" />

                    {/* Contact Information List */}
                    <div className="space-y-2.5 text-xs text-white/90 font-mono">
                      {/* Email */}
                      <a
                        href={`mailto:${personalInfo.emails.primary}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2.5 hover:text-[#ff5252] transition-colors truncate"
                      >
                        <svg
                          className="w-4 h-4 text-[#ff5252] shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="truncate">{personalInfo.emails.primary}</span>
                      </a>

                      {/* Phone */}
                      <a
                        href={`tel:${personalInfo.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2.5 hover:text-[#ff5252] transition-colors"
                      >
                        <svg
                          className="w-4 h-4 text-[#ff5252] shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span>+91 {personalInfo.phone}</span>
                      </a>

                      {/* Location */}
                      <div className="flex items-center gap-2.5">
                        <svg
                          className="w-4 h-4 text-[#ff5252] shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{personalInfo.location}</span>
                      </div>

                      {/* LinkedIn */}
                      {socialLinks.linkedin && (
                        <a
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2.5 hover:text-[#ff5252] transition-colors"
                        >
                          <svg
                            className="w-4 h-4 text-[#ff5252] fill-current shrink-0"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0-.01-2.9 1.45 1.45 0 0 0 .01 2.9m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                          </svg>
                          <span>LinkedIn</span>
                        </a>
                      )}

                      {/* GitHub */}
                      {socialLinks.github && (
                        <a
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2.5 hover:text-[#ff5252] transition-colors"
                        >
                          <svg
                            className="w-4 h-4 text-[#ff5252] fill-current shrink-0"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            />
                          </svg>
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bottom: QR Scanner Code & Label */}
                  <div className="flex items-center gap-4 pt-3 border-t border-white/10 mt-2">
                    <div className="w-20 h-20 bg-white p-1.5 rounded-xl shadow-md flex items-center justify-center shrink-0">
                      <img
                        src={qrCode}
                        alt="Scan QR code to connect with RAMESH K"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-white/60 text-xs font-mono font-medium leading-tight">
                      Scan to connect
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt Below Card */}
            <p className="text-red-950 font-black text-sm tracking-wide text-center mt-6 select-none flex items-center justify-center gap-2">
              Tap the card to flip <span className="text-base">↻</span>
            </p>
          </motion.div>
        </div>

        {/* Right: Bio Content */}
        <div className="flex-1" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* White Torn-Paper SVG Divider Along Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-12 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  )
}
