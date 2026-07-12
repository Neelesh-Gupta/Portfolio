import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GLASS } from '../constants/glass'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Immersive Portfolio',
    description:
      'A glassmorphic personal site with aurora gradients and embedded 3D scenes — built to make a lasting first impression.',
    tags: ['React', 'Spline', 'Tailwind'],
    featured: true,
  },
  {
    title: 'E-Commerce Dashboard',
    description:
      'A data-rich admin panel with real-time analytics, dark-mode glass UI, and buttery-smooth micro-interactions.',
    tags: ['JavaScript', 'API', 'Charts'],
    featured: false,
  },
  {
    title: 'Brand Landing Page',
    description:
      'A conversion-focused landing page with scroll-driven animations and a mobile-first responsive layout.',
    tags: ['Vite', 'Motion', 'SEO'],
    featured: false,
  },
]

const PARALLAX_OFFSETS = [45, 70, 55]

function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card')

      cards.forEach((card, index) => {
        const offset = PARALLAX_OFFSETS[index % PARALLAX_OFFSETS.length]

        gsap.fromTo(
          card,
          { y: 80 },
          {
            y: -offset,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.4,
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className={`relative mb-12 p-8 sm:p-10 ${GLASS}`}>
          <p className="pointer-events-auto relative z-10 mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2DD4BF]">
            Work
          </p>
          <h2 className="font-heading pointer-events-auto relative z-10 text-3xl font-bold text-white sm:text-4xl">
            Selected Projects
          </h2>
          <p className="pointer-events-auto relative z-10 mt-4 max-w-2xl text-base text-white/50">
            A curated collection of interfaces and experiences — each one
            crafted with attention to detail, performance, and visual impact.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`project-card group relative flex will-change-transform flex-col p-7 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05] sm:p-8 ${
                project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              } ${GLASS}`}
            >
              <div className="relative z-10 mb-6 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#2DD4BF]/20 bg-[#2DD4BF]/10">
                  <span className="font-heading text-sm font-bold text-[#2DD4BF]">
                    {project.title.charAt(0)}
                  </span>
                </div>
                {project.featured && (
                  <span className="rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/10 px-3 py-1 text-xs font-medium text-[#2DD4BF]">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="font-heading pointer-events-auto relative z-10 mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#2DD4BF]">
                {project.title}
              </h3>
              <p className="pointer-events-auto relative z-10 mb-6 flex-1 text-sm leading-relaxed text-white/50">
                {project.description}
              </p>
              <div className="relative z-10 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`pointer-events-auto px-3 py-1 text-xs font-medium text-white/60 ${GLASS}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
