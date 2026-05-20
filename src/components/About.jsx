import photo11 from '../assets/PRESKIT KODA11.jpg'

const stats = [
  { value: '10+', label: 'Years producing' },
  { value: '100+', label: 'Tracks mixed' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Left */}
          <div>
            <p className="label" style={{ marginBottom: '1rem', display: 'block' }}>About</p>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Not just an engineer.<br />
              <span style={{ color: 'var(--accent)' }}>A producer.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text)', lineHeight: 1.7 }}>
              <p>
                I&apos;m KODA — an Argentine techno/electronic producer and DJ.
                I&apos;ve been building music that lives in the low end since day one: heavy kicks,
                hypnotic grooves, and that specific pressure that only works
                when everything is perfectly aligned.
              </p>
              <p>
                When I mix and master your tracks, I&apos;m not running a
                template. I listen. I understand what you&apos;re trying to
                say, and I make sure your music hits the way it&apos;s supposed
                to — whether that&apos;s on a club system, a streaming platform,
                or a label release.
              </p>
              <p>
                This isn&apos;t generic audio engineering. It&apos;s a
                perspective shaped by thousands of hours producing, playing
                out, and obsessing over the details that most people miss.
              </p>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href="https://soundcloud.com/indikodaa" target="_blank" rel="noopener noreferrer" className="label"
                style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
                SoundCloud ↗
              </a>
              <span style={{ color: 'var(--border)' }}>|</span>
              <a href="https://www.instagram.com/koda_ar_/" target="_blank" rel="noopener noreferrer" className="label"
                style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
                Instagram ↗
              </a>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ border: '1px solid var(--border)', overflow: 'hidden' }}>
              <img
                src={photo11}
                alt="KODA"
                style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center 18%', maxHeight: '520px' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {stats.map(s => (
                <div key={s.label} className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.25rem' }}>{s.value}</div>
                  <div className="label" style={{ fontSize: '0.6rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
