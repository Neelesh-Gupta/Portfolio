import { GLASS } from '../constants/glass'

function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className={`relative mx-auto max-w-6xl p-8 sm:p-12 ${GLASS}`}>
        <p className="relative z-10 mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2DD4BF]">
          About
        </p>
        <h2 className="font-heading relative z-10 mb-6 text-3xl font-bold text-white sm:text-4xl">
          Content
        </h2>
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <p className="text-base leading-relaxed text-white/60 sm:text-lg">
            Content
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Content', value: 'Content' },
              { label: 'Content', value: 'Content' },
              { label: 'Content', value: 'Content' },
              { label: 'Content', value: 'Content' },
            ].map((item) => (
              <div
                key={item.label}
                className={`relative p-4 ${GLASS}`}
              >
                <p className="relative z-10 mb-1 text-xs uppercase tracking-wider text-white/40">
                  {item.label}
                </p>
                <p className="font-heading relative z-10 text-sm font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
