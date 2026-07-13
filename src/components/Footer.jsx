import { GLASS } from '../constants/glass'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-4 pb-8 sm:px-6">
      <div
        className={`relative mx-auto max-w-6xl px-6 py-6 text-center text-sm text-white/40 ${GLASS}`}
      >
        <p className="pointer-events-auto relative z-10">
          &copy; {year}{' '}
          <span className="font-heading font-semibold text-white/60">
            Neelesh Gupta 
          </span>
            " "Crafted with React, Tailwind &amp; Spline.
        </p>
      </div>
    </footer>
  )
}

export default Footer
