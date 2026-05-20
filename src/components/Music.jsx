import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import MusicScene from './MusicScene'

const tracks = [
  {
    title: 'Return (Original Mix)',
    description: 'Alula Tunes',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/indikodaa/koda-ar-return-original-mix-alula-tunes&color=%23e8ff00&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true',
  },
  {
    title: 'Forest Keeper (Original Mix)',
    description: 'Minimal Genesis V.A. — Joker Black Label',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/indikodaa/koda-ar-forest-keeper-original-mix&color=%23e8ff00&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true',
  },
  {
    title: 'King of Darkness',
    description: 'PRYZM Waves',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/indikodaa/koda-ar-king-of-darkness-pryzm&color=%23e8ff00&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true',
  },
]

export default function Music() {
  return (
    <section id="music" className="section section-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 3D background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 0, 6], fov: 65 }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
          <Suspense fallback={null}>
            <MusicScene />
          </Suspense>
        </Canvas>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }} className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <p className="label" style={{ marginBottom: '1rem', display: 'block' }}>Music</p>
          <h2 className="section-title">Hear the work</h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginTop: '1rem', maxWidth: '28rem' }}>
            Original tracks by KODA. This is the sound I bring to every project.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {tracks.map(track => (
            <div key={track.title} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <iframe
                title={track.title}
                width="100%"
                height="166"
                allow="autoplay"
                src={track.embedUrl}
                style={{ border: '1px solid var(--border)', display: 'block' }}
              />
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--white)' }}>{track.title}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', marginTop: '0.2rem' }}>{track.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="https://soundcloud.com/indikodaa" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.7rem' }}>
            All tracks on SoundCloud ↗
          </a>
        </div>
      </div>
    </section>
  )
}
