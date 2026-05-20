import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ServicesScene from './ServicesScene'

const services = [
  {
    id: '01', title: 'Mix', tagline: 'Full mixing — balance, depth, space.',
    description: 'I take your stems and build a coherent, powerful mix from scratch. Kick & bass alignment, frequency balance, stereo width, automation — everything that makes a track feel professional and ready.',
    includes: ['Stem organisation & gain staging', 'Full mix with up to 2 revisions', 'Club-optimised low end', 'Delivered in WAV 24-bit'],
  },
  {
    id: '02', title: 'Master', tagline: 'Final polish. Streaming & club ready.',
    description: 'Mastering that makes your track loud, clear, and competitive — without squashing what makes it good. LUFS targeting for Spotify, Apple Music, and DJ sets.',
    includes: ['Stereo mastering from mixed file', 'LUFS targeting (streaming + club)', 'Up to 2 revisions', 'Delivered WAV + MP3 320kbps'],
  },
  {
    id: '03', title: 'Stem Mastering', tagline: 'More control. Better results.',
    description: 'You send grouped stems (drums, bass, synths, FX) and I master with greater dynamic control than a standard stereo master. Ideal for complex arrangements that need surgical attention.',
    includes: ['Up to 8 stem groups', 'Individual stem processing', 'Final stereo master', 'Up to 2 revisions'],
  },
  {
    id: '04', title: 'Track Feedback', tagline: 'Honest ears. Actionable notes.',
    description: 'You send me your track — finished, unfinished, WIP — and I give you a detailed written breakdown of what\'s working, what isn\'t, and exactly what I\'d change. No fluff, no vague compliments.',
    includes: ['Detailed written feedback (400–600 words)', 'Specific mix/arrangement notes', 'Frequency & dynamics analysis', 'Delivered within 48h'],
  },
  {
    id: '05', title: 'Co-Production', tagline: 'Build something together.',
    description: 'Collaborative production — you bring an idea, a loop, a concept, or a half-finished project and we develop it together. Remote sessions via file exchange or live call.',
    includes: ['Track development from idea to finish', 'Sound design & arrangement', 'Mix-ready delivery', 'Flexible scope — discuss first'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section section-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 3D background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 0, 9], fov: 60 }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
          <Suspense fallback={null}>
            <ServicesScene />
          </Suspense>
        </Canvas>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }} className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <p className="label" style={{ marginBottom: '1rem', display: 'block' }}>Services</p>
          <h2 className="section-title">What I offer</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {services.map(s => (
            <div key={s.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className="label" style={{ color: 'var(--muted)' }}>{s.id}</span>
                <span style={{ color: 'var(--accent)', opacity: 0, transition: 'opacity 0.2s', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }} className="card-arrow">↗</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.25rem' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', marginBottom: '1rem' }}>{s.tagline}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text)', lineHeight: 1.65, flex: 1, marginBottom: '1.5rem' }}>{s.description}</p>
              <ul style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {s.includes.map(item => (
                  <li key={item} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA card */}
          <div style={{ background: 'rgba(232,255,0,0.04)', border: '1px solid rgba(232,255,0,0.2)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '1rem' }}>
            <p className="label" style={{ color: 'var(--accent)' }}>Not sure what you need?</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text)', lineHeight: 1.6 }}>Send me a message and I&apos;ll tell you exactly what your track needs.</p>
            <a href="#contact" className="btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.7rem' }}>Get in Touch</a>
          </div>
        </div>
      </div>

      <style>{`.card:hover .card-arrow { opacity: 1 !important; }`}</style>
    </section>
  )
}
