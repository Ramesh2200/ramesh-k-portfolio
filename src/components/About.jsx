import { useState } from 'react'
import { motion } from 'framer-motion'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo } from '../data/portfolioData'

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
        <div className="md:w-[350px] shrink-0 w-full flex justify-center">
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
            className="relative"
          >
            {/* Black Lanyard String */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black z-0 pointer-events-none" />

            {/* Grey Clip Rectangle */}
            <div className="w-8 h-4 bg-gray-400 rounded-sm mx-auto -mb-2 relative z-20 shadow-md" />

            {/* Flippable 3D Card Container */}
            <div
              className="max-w-[280px] w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer relative z-10"
              style={{ perspective: 1000 }}
              onClick={() => setIsFlipped(!isFlipped)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsFlipped(!isFlipped)
                }
              }}
              aria-label="Click to flip ID badge between photo and visiting card"
            >
              <div
                className="relative w-full transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front Side: ID Photo Badge */}
                <div className="bg-gray-900 rounded-2xl p-3 shadow-2xl [backface-visibility:hidden]">
                  {/* Card Cutout Slot */}
                  <div className="w-10 h-1.5 bg-gray-800 rounded-full mx-auto mb-3" />

                  {/* Card Photo */}
                  <img
                    src={stackImage}
                    alt="RAMESH K — Java Full Stack Developer, TAP Academy student"
                    className="w-full aspect-[3/4] rounded-xl object-cover object-top shadow-inner"
                  />
                  <p className="text-[10px] text-white/50 text-center mt-2 font-mono uppercase tracking-wider select-none">
                    Click to flip ↻
                  </p>
                </div>

                {/* Back Side: Visiting Card */}
                <div className="absolute inset-0 bg-gray-900 border border-white/20 rounded-2xl p-5 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between text-white select-none">
                  <div>
                    {/* Top Cutout Slot & Monogram */}
                    <div className="w-10 h-1.5 bg-gray-800 rounded-full mx-auto mb-4" />
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-red-400">
                        Visiting Card
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a] animate-ping" />
                    </div>

                    <h3 className="text-xl font-black tracking-tight text-white">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-mono text-red-400 uppercase tracking-wide mt-0.5">
                      {personalInfo.title}
                    </p>

                    <div className="mt-4 space-y-2 text-xs text-white/80 font-mono">
                      <p className="flex items-center gap-1.5">
                        <span className="text-white/40">Loc:</span> {personalInfo.location}
                      </p>
                      <p className="flex items-center gap-1.5 truncate">
                        <span className="text-white/40">Mail:</span> {personalInfo.emails.primary}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <span className="text-white/40">Tel:</span> {personalInfo.phone}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-[10px] font-mono uppercase tracking-wider mb-2">
                      TAP Academy Trainee
                    </span>
                    <p className="text-[10px] text-white/50 text-center font-mono uppercase tracking-wider">
                      Click to flip back ↺
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
