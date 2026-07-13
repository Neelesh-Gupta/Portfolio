import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const AURORA_COLORS = {
  purple: '#1A0B2E',
  blue: '#112240',
  teal: '#2DD4BF',
}

function AuroraBackground() {
  const containerRef = useRef(null)
  const layer1Ref = useRef(null)
  const layer2Ref = useRef(null)
  const layer3Ref = useRef(null)
  const colorPulseRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const colorTimeline = gsap.timeline({ repeat: -1, defaults: { ease: 'sine.inOut' } })

      colorTimeline
        .to(containerRef.current, { backgroundColor: AURORA_COLORS.blue, duration: 8 })
        .to(containerRef.current, { backgroundColor: AURORA_COLORS.teal, duration: 6, ease: 'power1.inOut' })
        .to(containerRef.current, { backgroundColor: AURORA_COLORS.purple, duration: 8 })
        .to(containerRef.current, { backgroundColor: AURORA_COLORS.blue, duration: 7 })

      const pulseTimeline = gsap.timeline({ repeat: -1, defaults: { ease: 'sine.inOut' } })

      pulseTimeline
        .to(colorPulseRef.current, {
          backgroundColor: AURORA_COLORS.teal,
          opacity: 0.22,
          duration: 10,
        })
        .to(colorPulseRef.current, {
          backgroundColor: AURORA_COLORS.blue,
          opacity: 0.18,
          duration: 10,
        })
        .to(colorPulseRef.current, {
          backgroundColor: AURORA_COLORS.purple,
          opacity: 0.25,
          duration: 10,
        })

      gsap.to(layer1Ref.current, {
        x: '8%',
        y: '-6%',
        rotation: 4,
        scale: 1.08,
        opacity: 0.85,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to(layer2Ref.current, {
        x: '-6%',
        y: '5%',
        rotation: -5,
        scale: 1.1,
        opacity: 0.75,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to(layer3Ref.current, {
        x: '4%',
        y: '7%',
        rotation: 6,
        scale: 1.06,
        opacity: 0.9,
        duration: 26,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to([layer1Ref.current, layer3Ref.current], {
        filter: 'hue-rotate(25deg) saturate(1.6)',
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 7,
      })

      gsap.to(layer2Ref.current, {
        filter: 'hue-rotate(-20deg) saturate(1.3) brightness(1.1)',
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#1A0B2E]"
    >
      <div ref={layer1Ref} className="aurora-layer aurora-layer-1" />
      <div ref={layer2Ref} className="aurora-layer aurora-layer-2" />
      <div ref={layer3Ref} className="aurora-layer aurora-layer-3" />
      <div
        ref={colorPulseRef}
        className="absolute inset-0 opacity-20 mix-blend-soft-light"
        style={{ backgroundColor: AURORA_COLORS.teal }}
      />
    </div>
  )
}

export default AuroraBackground
