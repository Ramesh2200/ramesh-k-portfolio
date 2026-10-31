import { useRef, useState } from 'react'
import { projects, socialLinks } from '../data/portfolioData'
import projectDemoBg from '../assets/projects/project-demo-bg.jpg'

function GitHubIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg
      className="w-4 h-4 stroke-current fill-none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function ProjectVideoPlayer({ project }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)

  const fileName = project.videoUrl ? project.videoUrl.replace('/videos/', '') : 'demo.mp4'

  const handleTogglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
          setHasError(false)
        })
        .catch(() => {
          setHasError(true)
          setIsPlaying(false)
        })
    }
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-2xl flex flex-col group/video">
      {/* Mock Browser Header */}
      <div className="px-4 py-2.5 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[11px] font-mono text-white/40 truncate max-w-[200px] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>{fileName}</span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 px-2 py-0.5 rounded bg-white/5 border border-white/10">
          Demo Video
        </span>
      </div>

      {/* Video Viewport */}
      <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
        {/* Background Showcase Image */}
        <img
          src={projectDemoBg}
          alt={`${project.title} Demo Preview`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-65 group-hover/video:opacity-85 group-hover/video:scale-105'
          }`}
        />

        {/* Cinematic Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 pointer-events-none transition-opacity duration-500 ${
            isPlaying ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {project.videoUrl && !hasError ? (
          <>
            <video
              ref={videoRef}
              src={project.videoUrl}
              poster={projectDemoBg}
              className={`w-full h-full object-cover relative z-10 transition-opacity duration-300 ${
                isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              playsInline
              controls={isPlaying}
              onError={() => setHasError(true)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Play Button Overlay (shown when paused) */}
            {!isPlaying && (
              <div
                onClick={handleTogglePlay}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer group-hover/video:bg-black/30 transition-all duration-300"
              >
                <button
                  type="button"
                  aria-label={`Play demo video for ${project.title}`}
                  className="w-16 h-16 rounded-full bg-[#ff2a2a] text-white flex items-center justify-center shadow-[0_0_35px_rgba(255,42,42,0.7)] group-hover/video:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <PlayIcon />
                </button>
                <span className="text-white text-xs font-mono font-bold uppercase tracking-widest mt-3 drop-shadow">
                  Play Demo Video
                </span>
                <span className="text-white/60 text-[10px] font-mono mt-1">
                  Click to start video
                </span>
              </div>
            )}
          </>
        ) : (
          /* Placeholder UI with Background Image */
          <div className="relative z-20 p-6 text-center flex flex-col items-center justify-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-red-500/20 backdrop-blur-md border border-red-500/40 text-[#ff2a2a] flex items-center justify-center shadow-[0_0_20px_rgba(255,42,42,0.3)]">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="17" x2="22" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-bold tracking-wide drop-shadow">
                Demo Video Slot Ready
              </p>
              <p className="text-white/60 text-xs font-mono mt-1 drop-shadow">
                Place <span className="text-[#ff2a2a] font-semibold">{fileName}</span> in <span className="text-white/80">public/videos/</span>
              </p>
            </div>
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-xs font-mono text-white/80 hover:text-white underline underline-offset-4 drop-shadow transition-colors"
              >
                Or preview live web app &rarr;
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project, aosDelay }) {
  const isFlagship = project.isFlagship

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-3xl transition-all duration-300 ${
        isFlagship
          ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/20 hover:to-red-500/50 shadow-[0_0_40px_rgba(255,42,42,0.15)]'
          : 'bg-white/10 hover:bg-white/20'
      }`}
    >
      <div className="rounded-3xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/95 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Project Details */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Optional Badge Pill */}
              {project.badge && (
                <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] uppercase tracking-widest text-xs font-mono font-semibold mb-3">
                  {project.badge}
                </span>
              )}

              {/* Number & Title */}
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-4xl md:text-5xl font-black text-white/15 font-serif italic select-none">
                  {project.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-snug">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Tag Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techTags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-red-600/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              {project.links?.demo && project.links.demo.trim() !== '' ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-sm font-bold hover:bg-[#e02020] hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-200"
                >
                  <ExternalLinkIcon />
                  <span>Live Demo</span>
                </a>
              ) : null}

              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-white text-sm font-semibold hover:bg-white/15 transition-all duration-200"
                >
                  <GitHubIcon />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Project Demo Video Player */}
          <div className="lg:col-span-6">
            <ProjectVideoPlayer project={project} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center mb-16 relative z-10" data-aos="fade-up">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          Featured Projects
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
          Work that speaks for itself
        </h2>
        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
          A showcase of full-stack web applications engineered for scalability and real-world impact.
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            aosDelay={(index + 1) * 100}
          />
        ))}
      </div>

      {/* Explore All Repositories CTA */}
      <div className="mt-16 text-center relative z-10" data-aos="fade-up">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-bold text-sm md:text-base hover:bg-white/10 hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(255,42,42,0.25)] transition-all duration-300"
        >
          <GitHubIcon />
          <span>Explore All My Repositories</span>
          <svg
            className="w-4 h-4 stroke-current fill-none ml-1"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
