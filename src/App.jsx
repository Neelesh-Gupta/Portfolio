import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AuroraBackground from './components/AuroraBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import { GLASS, GLASS_BENTO } from './constants/glass'

gsap.registerPlugin(ScrollTrigger)

const selectedWorks = [
  {
    title: 'Project 1',
    category: 'Topic',
    description:
      'Description',
    span: 'md:col-span-2 md:row-span-2',
    accent: true,
  },
  {
    title: 'Project 2',
    category: 'Topic',
    description:
      'Description',
    span: '',
  },
  {
title: 'Project 3',
    category: 'Topic',
    description:
      'Description',
    span: '',
  },
  {
    title: 'Project 4',
    category: 'Topic',
    description:
      'Description',
    span: 'md:col-span-2',
  },
  {
    title: 'Project 5',
    category: 'Topic',
    description:
      'Description',
    span: '',
  },
]

function App() {
  const bentoRef = useRef(null)
  const splineRef = useRef(null)

  useEffect(() => {
    // Fade Spline out as user scrolls past hero so backdrop-filter works on bento cards
    const splineFade = gsap.to(splineRef.current, {
      opacity: 0,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#works',
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    })

    const ctx = gsap.context(() => {
      gsap.from('.bento-card', {
        y: 56,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.14,
        scrollTrigger: {
          trigger: bentoRef.current,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      })
    }, bentoRef)

    return () => {
      splineFade.scrollTrigger?.kill()
      ctx.revert()
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Aurora gradient — bottom layer */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <AuroraBackground />
      </div>

      {/* Spline — above aurora, fades out on scroll so backdrop-filter works below */}
      <div ref={splineRef} className="spline-layer fixed inset-0 z-10 h-screen w-screen pointer-events-auto">         
        <Spline scene="https://prod.spline.design/cjbK0moB5ygdybjZ/scene.splinecode" />
      </div>

      {/* Content — scrollable, mouse-transparent */}
      <div className="pointer-events-none relative z-20 w-full">
        <Navbar />

        <main>
          <Hero />

          <section
            id="works"
            ref={bentoRef}
            className="px-4 py-28 sm:px-6"
          >
            <div className="mx-auto max-w-6xl">
              <div className={`relative mb-16 p-8 sm:p-10 lg:p-12 ${GLASS}`}>
                <p className="relative z-10 mb-4 inline-flex items-center gap-2 rounded-full border border-[#2DD4BF]/20 bg-[#2DD4BF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#2DD4BF]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2DD4BF]" />
                  Content
                </p>
                <h2 className="font-heading relative z-10 mb-6 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Content
                  <span className="block bg-gradient-to-r from-white via-[#2DD4BF] to-white/70 bg-clip-text text-transparent">
                    Content
                  </span>
                  Content
                </h2>
                <p className="relative z-10 mb-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                  Content
                </p>
                <div className="relative z-10 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="relative z-30 rounded-2xl bg-[#2DD4BF] px-7 py-3.5 text-sm font-semibold text-[#1A0B2E] transition-all pointer-events-auto hover:bg-[#2DD4BF]/90 hover:shadow-[0_0_30px_rgba(45,212,191,0.35)]"
                  >
                    Explore Publications
                  </a>
                  <a
                    href="#contact"
                    className="relative z-30 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all pointer-events-auto hover:border-[#2DD4BF]/40 hover:bg-white/[0.08] hover:text-[#2DD4BF]"
                  >
                    Let&apos;s Connect
                  </a>
                </div>
              </div>

              <div className="mb-16 max-w-2xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#2DD4BF]">
                  Content
                </p>
                <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Content
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/50 sm:text-lg">
                  Content
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[minmax(180px,auto)] md:gap-8">
                {selectedWorks.map((work) => (
                  <article
                    key={work.title}
                    className={`bento-card group relative flex flex-col justify-between p-8 sm:p-10 ${GLASS_BENTO} ${work.span}`}
                  >
                    <div className="relative z-10">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2DD4BF]/80">
                        {work.category}
                      </p>
                      <h3
                        className={`font-heading font-bold text-white transition-colors group-hover:text-[#2DD4BF] ${
                          work.accent
                            ? 'mb-4 text-2xl sm:text-3xl'
                            : 'mb-3 text-xl'
                        }`}
                      >
                        {work.title}
                      </h3>
                      <p
                        className={`leading-relaxed text-white/50 ${
                          work.accent ? 'max-w-lg text-base' : 'text-sm'
                        }`}
                      >
                        {work.description}
                      </p>
                    </div>

                    {work.accent && (
                      <a
                        href="#projects"
                        className="relative z-30 mt-8 flex items-center gap-2 text-sm font-medium text-[#2DD4BF]/70 transition-colors pointer-events-auto group-hover:text-[#2DD4BF]"
                      >
                        Content
                        <span className="transition-transform group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>

          <About />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
