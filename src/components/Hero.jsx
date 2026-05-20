import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import HeroScene from './HeroScene'
import photo10 from '../assets/PRESKIT KODA10.jpg'

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

      {/* Three.js canvas */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} style={{ background: '#0a0a0a' }}>
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Artist photo (subtle, left-anchored on mobile) */}
      <img
        src={photo10}
        alt=""
        className="hero-photo"
        style={{ position: 'absolute', top: '64px', left: 0, height: 'calc(100% - 64px)', objectFit: 'contain', objectPosition: 'left top', opacity: 0.18, pointerEvents: 'none', zIndex: 1 }}
      />

      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.3) 60%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 1.5rem', maxWidth: '56rem', margin: '0 auto' }}>
        <p className="label" style={{ marginBottom: '1.5rem', display: 'block' }}>Techno · Electronic</p>

        <h1 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--white)', lineHeight: 1, marginBottom: '1.5rem', fontSize: 'clamp(4rem, 15vw, 10rem)', letterSpacing: '-0.02em' }}>
          KODA
          <br />
          <span style={{ color: 'var(--accent)' }}>(AR)</span>
        </h1>

        <p className="label" style={{ marginBottom: '2rem', display: 'block', letterSpacing: '0.2em' }}>
          Mix · Master · Stem Mastering · Co-Production
        </p>

        <p style={{ color: 'var(--text)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '36rem', margin: '0 auto 3rem', lineHeight: 1.7 }}>
          Club-ready sound crafted by an active techno producer.
          Your tracks, built for the dance floor.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn-primary">Get a Quote</a>
          <a href="#music" className="btn-outline">Hear My Work</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 3 }}>
        <span className="label" style={{ fontSize: '0.6rem' }}>Scroll</span>
        <div style={{ width: '1px', height: '3rem', background: 'linear-gradient(to bottom, var(--muted), transparent)' }} />
      </div>

      <style>{`
        @media (min-width: 769px) {
          .hero-photo { width: 45% !important; object-position: 25% top !important; }
        }
        @media (max-width: 768px) {
          .hero-photo { width: 60% !important; }
        }
      `}</style>
    </section>
  )
}
