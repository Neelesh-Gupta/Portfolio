import { GLASS } from '../constants/glass'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 px-4 pt-5 sm:px-6">
      <nav
        className={`relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 ${GLASS}`}
      >
        <a
          href="#home"
          className="font-heading relative z-30 text-lg font-bold tracking-tight text-white pointer-events-auto"
        >
          Portfolio
        </a>
        <ul className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative z-30 rounded-full px-3 py-2 text-sm font-medium text-white/60 transition-colors pointer-events-auto hover:bg-white/[0.06] hover:text-[#2DD4BF] sm:px-4"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
