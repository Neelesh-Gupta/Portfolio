import { GLASS } from '../constants/glass'

const contactLinks = [
  { label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/you', href: 'https://linkedin.com' },
  { label: 'GitHub', value: 'github.com/you', href: 'https://github.com' },
]

function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className={`relative mx-auto max-w-6xl p-8 sm:p-12 ${GLASS}`}>
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="pointer-events-auto mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2DD4BF]">
              Contact
            </p>
            <h2 className="font-heading pointer-events-auto mb-4 text-3xl font-bold text-white sm:text-4xl">
              Content
            </h2>
            <p className="pointer-events-auto text-base leading-relaxed text-white/50 sm:text-lg">
              Content
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noreferrer' : undefined}
                className={`pointer-events-auto group flex items-center justify-between p-5 transition-all hover:border-white/[0.14] hover:bg-white/[0.05] ${GLASS}`}
              >
                <div>
                  <p className="mb-1 text-xs uppercase tracking-wider text-white/40">
                    {link.label}
                  </p>
                  <p className="font-heading text-sm font-semibold text-white transition-colors group-hover:text-[#2DD4BF]">
                    {link.value}
                  </p>
                </div>
                <span className="text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-[#2DD4BF]">
                  &rarr;
                </span>
              </a>
            ))}

            <a
              href="mailto:your.email@example.com"
              className="pointer-events-auto mt-2 rounded-2xl bg-[#2DD4BF] px-7 py-4 text-center text-sm font-semibold text-[#1A0B2E] transition-all hover:bg-[#2DD4BF]/90 hover:shadow-[0_0_30px_rgba(45,212,191,0.35)]"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
