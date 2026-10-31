import { useRef, useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroVideo from '../assets/hero/hero.mp4'
import heroPhoto from '../assets/hero/hero-photo.png'
import { heroContent, socialLinks, personalInfo } from '../data/portfolioData'

export default function Hero() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' })

    const handleLoad = () => {
      AOS.refresh()
    }

    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  const toggleVideo = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const renderSocialIcon = (platform, url, pathD, isCustomBox = false, viewBox = '0 0 24 24') => {
    if (!url) return null
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={platform}
        className="text-white/60 hover:text-white hover:scale-125 transition-all duration-200 inline-block"
      >
        <svg className="w-5 h-5 fill-current" viewBox={viewBox} aria-hidden="true">
          {isCustomBox ? (
            pathD
          ) : (
            <path d={pathD} />
          )}
        </svg>
      </a>
    )
  }

  const githubPath = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  )

  const linkedinPath = (
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0-.01-2.9 1.45 1.45 0 0 0 .01 2.9m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  )

  const instagramPath = (
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  )

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#ff2a2a]">
      {/* Background Video Reel */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-contain object-top md:object-right z-0 transition-opacity duration-500 ${
          isPlaying ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        playsInline
        muted
        loop
        poster={heroPhoto}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>


      {/* Hero Photo Image (Shown when video reel is paused or idle) */}
      <img
        src={heroPhoto}
        alt={`${personalInfo?.name || 'RAMESH K'} - Developer Portrait`}
        className={`absolute inset-0 w-full h-full object-contain object-top md:object-right z-0 transition-opacity duration-500 ${
          isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />


      {/* Readability Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

      {/* Left Floating Social Bar (Desktop) */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference flex-col space-y-4">
        {renderSocialIcon('GitHub', socialLinks.github, githubPath, true)}
        {renderSocialIcon('LinkedIn', socialLinks.linkedin, linkedinPath)}
        {renderSocialIcon('Instagram', socialLinks.instagram, instagramPath)}
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-[8%] flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end">
        {/* Left Block */}
        <div className="max-w-2xl">
          {/* Small Screens Social Icons */}
          <div
            className="lg:hidden flex items-center space-x-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {renderSocialIcon('GitHub', socialLinks.github, githubPath, true)}
            {renderSocialIcon('LinkedIn', socialLinks.linkedin, linkedinPath)}
            {renderSocialIcon('Instagram', socialLinks.instagram, instagramPath)}
          </div>

          {/* Heading */}
          <h1
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4"
            data-aos="fade-up"
          >
            {heroContent.greeting}, <br />
            <span className="text-black">{heroContent.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white text-sm md:text-lg font-semibold max-w-md mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {heroContent.subtitle}
          </p>

          {/* Action Buttons */}
          <div
            className="flex flex-wrap items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Primary CTA */}
            {heroContent.ctaPrimary && (
              <a
                href={heroContent.ctaPrimary.href}
                className="px-7 py-3 rounded-full bg-white text-black font-bold text-sm md:text-base hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {heroContent.ctaPrimary.text}
              </a>
            )}

            {/* Secondary CTA */}
            {heroContent.ctaSecondary && (
              <a
                href={heroContent.ctaSecondary.href}
                className="px-7 py-3 rounded-full bg-black/40 border border-white text-white font-semibold text-sm md:text-base backdrop-blur hover:bg-black/60 transition-all duration-200"
              >
                {heroContent.ctaSecondary.text}
              </a>
            )}

            {/* Resume Download CTA */}
            {heroContent.ctaResume && heroContent.ctaResume.href && (
              <a
                href={heroContent.ctaResume.href}
                download
                className="px-7 py-3 rounded-full bg-transparent border border-white/50 text-white font-semibold text-sm md:text-base hover:border-white hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {heroContent.ctaResume.text}
              </a>
            )}
          </div>
        </div>

        {/* Right Block: Play Reel Control */}
        <div
          className="mt-8 md:mt-0 flex flex-col items-center"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <button
            type="button"
            onClick={toggleVideo}
            className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur hover:scale-110 hover:bg-[#ff2a2a] hover:shadow-[0_0_25px_#ff2a2a] transition-all duration-300 flex items-center justify-center cursor-pointer group"
            aria-label={isPlaying ? 'Pause Reel' : 'Play Reel'}
          >
            {isPlaying ? (
              // Pause Icon
              <svg
                className="w-5 h-5 md:w-8 md:h-8 fill-white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              // Play Icon
              <svg
                className="w-5 h-5 md:w-8 md:h-8 fill-white ml-0.5 md:ml-1"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>
          <span className="text-white/80 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-mono font-medium">
            {isPlaying ? 'Pause' : 'Play Reel'}
          </span>
        </div>
      </div>

      {/* Bottom Center Bouncing Scroll Indicator */}
      <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce pointer-events-none text-white">
        <svg
          className="w-6 h-6 stroke-current fill-none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
