import { technicalSkills } from '../data/portfolioData'

function SkillIcon({ icon }) {
  const iconProps = {
    className: 'w-5 h-5 shrink-0',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
  }

  switch (icon) {
    case 'java':
      return (
        <svg {...iconProps} viewBox="0 0 32 32">
          <path
            d="M13.2 24.3c3.5.2 6.6-.9 9.3-2.1-2.5 1-5.7 1.6-8.8 1.4-1.9-.1-3.6-.6-4.5-1.4 1 .8 2.3 1.9 4 2.1z"
            fill="#5382A1"
          />
          <path
            d="M19.4 19.8c2.2-1.2 3.1-2.4 2.1-3.3-.8-.8-2.6-.9-4.8-.4-1.9.4-3.8 1.3-4.3 2.1-.5.7.1 1.4 1.7 1.8 1.9.4 3.7.6 5.3-.2z"
            fill="#EA2D2E"
          />
          <path
            d="M10.8 14.5c-.8 1.5-.2 2.7 1.5 3.1 1.6.3 3.6-.1 5.3-.9 1.5-.7 2.4-1.7 2.1-2.4-.4-.8-1.9-1.2-3.8-1.2-2.3 0-4.3.4-5.1 1.4z"
            fill="#5382A1"
          />
          <path
            d="M18.8 9.3c-1.3 1.1-2.8 2.2-3.4 3.4 1.2-.5 2.5-.9 3.7-1 .9-.1 1.8 0 2.2.4.6.6.1 1.4-1.2 2.1 2.1-.5 3.3-1.6 3.1-2.7-.2-1.1-1.9-1.8-4.4-2.2z"
            fill="#EA2D2E"
          />
          <path
            d="M8.5 26.6c4.5 1.1 10.9.9 15.1-.4 1.2-.4 1.8-.8 1.7-1.3-.2-.5-1.3-.8-3-.9 2.5.4 3.7 1.1 3.5 1.8-.4 1.1-3.4 1.8-7.8 2-4.5.2-8.5-.2-9.5-1.2z"
            fill="#5382A1"
          />
        </svg>
      )
    case 'python':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path
            d="M11.9 2c-5.4 0-5.1 2.3-5.1 2.3l.1 2.4h5.2v.7H4.8S2 7.1 2 12.5s2.5 5.2 2.5 5.2h1.5v-2.2s-.1-2.5 2.5-2.5h5.1s2.4.1 2.4-2.4V4.4S16.3 2 11.9 2zm-1.4 1.6a.9.9 0 110 1.8.9.9 0 010-1.8z"
            fill="#3776AB"
          />
          <path
            d="M12.1 22c5.4 0 5.1-2.3 5.1-2.3l-.1-2.4H11.9v-.7h7.3s2.8.3 2.8-5.1-2.5-5.2-2.5-5.2h-1.5v2.2s.1 2.5-2.5 2.5h-5.1s-2.4-.1-2.4 2.4v8.3s-.3 2.3 4.1 2.3zm1.4-1.6a.9.9 0 110-1.8.9.9 0 010 1.8z"
            fill="#FFD43B"
          />
        </svg>
      )
    case 'javascript':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M6.5 18.2l2.1-1.3c.5.8 1 1.4 1.8 1.4.8 0 1.3-.3 1.3-1.4v-6.7h2.7v6.8c0 2.4-1.4 3.5-3.6 3.5-2 0-3.3-1-4.3-2.3zm8.2-.3l2.1-1.2c.6.9 1.3 1.6 2.4 1.6 1 0 1.6-.5 1.6-1.1 0-.8-.7-1.1-1.9-1.6l-.7-.3c-1.9-.8-3.2-1.8-3.2-3.9 0-1.9 1.5-3.4 3.8-3.4 1.7 0 2.9.6 3.8 2.2l-2.1 1.3c-.4-.8-1-1.2-1.7-1.2-.8 0-1.3.5-1.3 1 0 .7.5 1 1.6 1.5l.7.3c2.3 1 3.5 2 3.5 4.1 0 2.4-1.9 3.6-4.3 3.6-2.4 0-4-1.2-4.8-2.9z"
            fill="#000000"
          />
        </svg>
      )
    case 'sql':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" stroke="#00758F" strokeWidth="1.8">
          <ellipse cx="12" cy="5" rx="9" ry="3" fill="#00758F" fillOpacity="0.2" />
          <path d="M21 5v7c0 1.66-4.03 3-9 3s-9-1.34-9-3V5" />
          <path d="M21 12v7c0 1.66-4.03 3-9 3s-9-1.34-9-3v-7" />
          <path d="M12 9v5" stroke="#F29111" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'html5':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M3 2l1.6 18.2L12 22.5l7.4-2.3L21 2H3z" fill="#E34F26" />
          <path d="M12 3.6v17.2l5.9-1.8 1.4-15.4H12z" fill="#EF652A" />
          <path
            d="M6.8 6.5h10.4l-.3 2.7H9.8l.3 2.7h6.7l-.6 6.3-4.2 1.2-4.2-1.2-.3-3.2h2.5l.2 1.7 1.8.5 1.8-.5.3-2.8H7.1L6.8 6.5z"
            fill="#FFFFFF"
          />
        </svg>
      )
    case 'css3':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M3 2l1.6 18.2L12 22.5l7.4-2.3L21 2H3z" fill="#1572B6" />
          <path d="M12 3.6v17.2l5.9-1.8 1.4-15.4H12z" fill="#33A9DC" />
          <path
            d="M17.2 6.5H6.8l.3 2.7h7.3l-.3 2.7H7.4l.3 2.7h6.4l-.3 3.3-1.8.5-1.8-.5-.1-1.7H7.6l.3 3.2 4.1 1.2 4.2-1.2.9-10.9h.1z"
            fill="#FFFFFF"
          />
        </svg>
      )
    case 'react':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" stroke="#61DAFB" strokeWidth="1.6">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      )
    case 'bootstrap':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="5" fill="#7952B3" />
          <path
            d="M8 6h4.5c2 0 3.3.9 3.3 2.3 0 1.1-.7 1.9-1.7 2.1 1.3.3 2.1 1.2 2.1 2.5 0 1.7-1.4 2.8-3.6 2.8H8V6zm2.4 3.9h1.9c.8 0 1.3-.4 1.3-1 0-.6-.5-1-1.3-1h-1.9v2zm0 4.1h2.2c.9 0 1.5-.4 1.5-1.1 0-.7-.6-1.1-1.5-1.1h-2.2v2.2z"
            fill="#FFFFFF"
          />
        </svg>
      )
    case 'springboot':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="5" fill="#6DB33F" />
          <path
            d="M17.5 13.5c-.8 2.5-3 4.5-5.8 4.5-3.6 0-6.2-2.9-6.2-6.5 0-4.3 4.2-7.5 7.8-7.5.3 0 .7 0 1 .1-.1.4-.2.8-.2 1.3 0 3 2.1 5.4 4.8 6 0 .7-.4 1.4-1.6 2.1zm-3.3-4.7c-1.3-.3-2.3-1.5-2.3-3 0-.6.2-1.2.5-1.7-2.3.7-3.9 2.7-3.9 5.2 0 2.4 1.7 4.4 4.1 4.9.4.1.8.1 1.2.1 2.1 0 3.9-1.2 4.7-3-1.6-.2-3.1-1-4.3-2.5z"
            fill="#FFFFFF"
          />
        </svg>
      )
    case 'servlets':
    case 'jsp':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" stroke="#F58220" strokeWidth="1.8">
          <rect x="3" y="4" width="18" height="16" rx="3" fill="#F58220" fillOpacity="0.15" />
          <path d="M7 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 15h4" strokeLinecap="round" />
        </svg>
      )
    case 'jdbc':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" stroke="#009688" strokeWidth="1.8">
          <ellipse cx="12" cy="6" rx="8" ry="3" fill="#009688" fillOpacity="0.2" />
          <path d="M4 6v8c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
          <path d="M9 17v4m6-4v4m-5 0h4" strokeLinecap="round" />
        </svg>
      )
    case 'restapi':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" stroke="#10B981" strokeWidth="1.8">
          <path d="M4 12h16m-4-4l4 4-4 4M8 8l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="2.5" fill="#10B981" />
        </svg>
      )
    case 'mysql':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path
            d="M19.8 11.5c-.5-.7-1.6-.9-2.5-.5-1.1.5-2 1.6-2.5 2.7-.4.9-.5 1.9-.3 2.9.2 1.1.8 2 1.7 2.6 1.4.9 3.2.7 4.3-.4 1.1-1.1 1.4-2.8.8-4.2-.3-.8-.9-1.5-1.5-2.1v-1zm-9.2-2.3c-.9-.4-2-.3-2.8.2-.8.5-1.4 1.3-1.6 2.2-.2.9 0 1.9.6 2.7.6.8 1.6 1.2 2.6 1.1.9-.1 1.7-.6 2.2-1.4.5-.8.7-1.8.4-2.7-.2-.9-.7-1.6-1.4-2.1z"
            fill="#00758F"
          />
          <path
            d="M3.2 14.5c1.4-2.8 4.3-4.7 7.5-4.8 2.9-.1 5.7 1.3 7.2 3.8.4.6.9 1.4 1.5 1.8 1.1.7 2.6.4 3.4-.6.3-.4.5-.9.6-1.4 0-1.8-1-3.5-2.5-4.5-2-1.4-4.6-1.8-6.9-1.1-2.9.9-5.2 3.2-6.2 6.1-.7 2-2.1 3.7-4 4.7l-.6.3c0-.1 0-.1 0-.2z"
            fill="#F29111"
          />
        </svg>
      )
    case 'mongodb':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path
            d="M12 1.5s-6 6.3-6 11.2c0 4.2 3.1 7.8 6 9.8 2.9-2 6-5.6 6-9.8 0-4.9-6-11.2-6-11.2z"
            fill="#47A248"
          />
          <path
            d="M12 2.3v18.7c2.6-1.9 5.2-5.1 5.2-8.8 0-4.3-5.2-9.9-5.2-9.9z"
            fill="#499D4A"
          />
          <path
            d="M12 21.8c-.3 0-.6-.3-.6-.8 0-1.1.3-3.4.6-5.5.3 2.1.6 4.4.6 5.5 0 .5-.3.8-.6.8z"
            fill="#FFFFFF"
          />
        </svg>
      )
    case 'postgresql':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" stroke="#336791" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" fill="#336791" fillOpacity="0.15" />
          <path d="M8 10c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5c0 3-2 5-4 5s-4-2-4-5z" strokeLinecap="round" />
          <path d="M12 15v4m-3-2c1 .7 2 1 3 1s2-.3 3-1" strokeLinecap="round" />
        </svg>
      )
    case 'github':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="#FFFFFF">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      )
    case 'vscode':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path
            d="M17.4 2.2l-9.1 8.4-4.5-3.4L2 8.3v7.4l1.8 1.1 4.5-3.4 9.1 8.4 4.6-2.2V4.4l-4.6-2.2zm0 14.8l-5.7-4.3 5.7-4.3v8.6z"
            fill="#007ACC"
          />
        </svg>
      )
    case 'eclipse':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" fill="#2C2255" />
          <path
            d="M12 4a8 8 0 000 16c2.8 0 5.3-1.4 6.8-3.6-2 .8-4.2 1.1-6.8 1.1-5 0-9-3.6-9-8s4-8 9-8c2.6 0 4.8.4 6.8 1.1C17.3 5.4 14.8 4 12 4z"
            fill="#F7941E"
          />
        </svg>
      )
    case 'postman':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path
            d="M16.5 8.5c-.8-.8-2-1-3-.6l-4.8 2c-.6.3-1 .8-1 1.5 0 .7.4 1.3 1 1.5l2.2.9.9 2.2c.2.6.8 1 1.5 1 .7 0 1.2-.4 1.5-1l2-4.8c.4-1 .2-2.2-.6-3zm-2.4 3.8l-1.9-.8-.8-1.9 3.2-1.3-.5 4z"
            fill="#FFFFFF"
          />
        </svg>
      )
    case 'oop':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" stroke="#A855F7" strokeWidth="1.8">
          <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" fill="#A855F7" fillOpacity="0.15" />
          <path d="M12 2v18M20 6.5l-8 4.5-8-4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'dsa':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" stroke="#38BDF8" strokeWidth="1.8">
          <circle cx="12" cy="5" r="2.5" fill="#38BDF8" fillOpacity="0.2" />
          <circle cx="6" cy="17" r="2.5" fill="#38BDF8" fillOpacity="0.2" />
          <circle cx="18" cy="17" r="2.5" fill="#38BDF8" fillOpacity="0.2" />
          <path d="M10.5 7L7.5 15m6-8l3 8" strokeLinecap="round" />
        </svg>
      )
    default:
      return (
        <span
          className="w-2 h-2 rounded-full bg-[#ff2a2a] shrink-0"
          aria-hidden="true"
        />
      )
  }
}

function CategoryIcon({ title }) {
  const iconClasses = 'w-5 h-5 text-[#ff2a2a]'
  if (title.toLowerCase().includes('programming')) {
    return (
      <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  if (title.toLowerCase().includes('frontend')) {
    return (
      <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  }
  if (title.toLowerCase().includes('backend')) {
    return (
      <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    )
  }
  return (
    <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function SkillBadge({ name, icon }) {
  return (
    <div className="group/badge inline-flex items-center gap-2.5 rounded-xl px-3.5 py-2 bg-white/[0.04] border border-white/10 hover:border-red-500/40 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(255,42,42,0.15)] hover:scale-105 transition-all duration-200">
      <SkillIcon icon={icon} name={name} />
      <span className="text-white/90 group-hover/badge:text-white text-xs md:text-sm font-medium tracking-tight">
        {name}
      </span>
    </div>
  )
}

function SkillCard({ category, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-7 hover:border-red-500/40 hover:shadow-[0_0_35px_rgba(255,42,42,0.2)] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 pb-3 mb-5 border-b border-white/10">
          <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
            <CategoryIcon title={category.title} />
          </div>
          <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-wide">
            {category.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {category.skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Blurred Red Background Circle: Top-Left */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Blurred Red Background Circle: Bottom-Right */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10" data-aos="fade-up">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          Technical Stack
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          My Skillset
        </h2>
        <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
          Technologies and tools I leverage to build scalable, robust applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto relative z-10">
        {technicalSkills.categories.map((category, index) => (
          <SkillCard
            key={category.title}
            category={category}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
