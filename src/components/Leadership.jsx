import { leadershipList } from '../data/portfolioData'

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 w-full">
      {/* Red Glowing Dot on Timeline */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-10 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_#ff2a2a] border-2 border-white" />

      {/* Even index: Card on Left (md), Spacer on Right */}
      {isEven ? (
        <>
          <div
            data-aos="fade-right"
            className="w-full md:w-[45%] pl-12 md:pl-0 md:text-right"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(255,42,42,0.15)] transition-all duration-300">
              {item.badge && (
                <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] uppercase tracking-widest text-xs font-mono font-semibold mb-3">
                  {item.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-white hover:text-[#ff2a2a] transition-colors mb-2">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-xs tracking-wider text-red-400 mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
          <div className="hidden md:block md:w-[45%]" />
        </>
      ) : (
        /* Odd index: Spacer on Left, Card on Right (md) */
        <>
          <div className="hidden md:block md:w-[45%]" />
          <div
            data-aos="fade-left"
            className="w-full md:w-[45%] pl-12 md:pl-0 md:text-left"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(255,42,42,0.15)] transition-all duration-300">
              {item.badge && (
                <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] uppercase tracking-widest text-xs font-mono font-semibold mb-3">
                  {item.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-white hover:text-[#ff2a2a] transition-colors mb-2">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-xs tracking-wider text-red-400 mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default function Leadership() {
  return (
    <section className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-28 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn Paper Divider at Top (Inverted / Flipped) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg
          className="relative block w-full h-10 md:h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
            className="fill-[#ff2a2a]"
          />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center mb-20 relative z-10" data-aos="fade-up">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          Activities
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
          Leadership & Engagement
        </h2>
        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
          Collaborative initiatives, hackathons, and technical community involvement.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Continuous Gradient Line */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

        {/* Timeline Items */}
        <div className="relative">
          {leadershipList.map((item, index) => (
            <LeadershipItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
