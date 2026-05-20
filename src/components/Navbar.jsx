import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Music', href: '#music' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.3s, border-color 0.3s',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <a href="#hero" style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--white)', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase' }}>
          KODA<span style={{ color: 'var(--accent)', marginLeft: '4px' }}>(AR)</span>
        </a>

        {/* Desktop */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="label" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary desktop-nav" style={{ padding: '0.5rem 1.25rem', fontSize: '0.7rem' }}>Get a Quote</a>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-nav"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '20px', height: '2px', background: 'var(--white)',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav" style={{ background: 'rgba(10,10,10,0.98)', borderBottom: '1px solid var(--border)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="label"
              style={{ color: 'var(--muted)', padding: '0.25rem 0' }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ textAlign: 'center', marginTop: '0.5rem', padding: '0.75rem', fontSize: '0.7rem' }}>
            Get a Quote
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
        @media (min-width: 769px) { .mobile-nav { display: none !important; } }
      `}</style>
    </nav>
  )
}
