export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2.5rem 1.5rem' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div className="label" style={{ color: 'var(--muted)' }}>
          <span style={{ color: 'var(--white)', fontWeight: 700 }}>KODA (AR)</span> — Mix · Master · Stem · Co-Production
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { label: 'SoundCloud', href: 'https://soundcloud.com/indikodaa' },
            { label: 'Instagram', href: 'https://www.instagram.com/koda_ar_/' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="label"
              style={{ color: 'var(--muted)', fontSize: '0.6rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="label" style={{ fontSize: '0.6rem', color: 'var(--muted)' }}>© {year} KODA (AR)</div>
      </div>
    </footer>
  )
}
