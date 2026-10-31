import { internshipsList } from '../data/portfolioData'

export default function Internships() {
  if (!internshipsList || internshipsList.length === 0) return null

  return (
    <section
      id="experience"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      {/* Header */}
      <div className="text-center mb-16 relative z-10" data-aos="fade-up">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          Experience
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
          Internships & Experience
        </h2>
        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
          Practical industry exposure building full-stack applications with modern web and enterprise frameworks.
        </p>
      </div>

      {/* Experience List */}
      <div className="max-w-4xl mx-auto flex flex-col gap-8 relative z-10">
        {internshipsList.map((item, index) => (
          <div
            key={item.organization}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(255,42,42,0.15)] transition-all duration-300"
          >
            {/* Top Row: Organization & Duration */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {item.organization}
                </h3>
                <p className="text-red-400 font-mono text-sm uppercase tracking-wide mt-1">
                  {item.role}
                </p>
              </div>
              <span className="inline-flex self-start sm:self-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-mono font-medium">
                {item.duration}
              </span>
            </div>

            {/* Core Competencies Learned */}
            {item.skills && item.skills.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs uppercase font-mono tracking-widest text-white/50 mb-3">
                  Key Responsibilities & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/80"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Used */}
            {item.tech && item.tech.length > 0 && (
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-white/50 mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 text-[#ff2a2a]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
