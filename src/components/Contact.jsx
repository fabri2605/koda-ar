import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ContactScene from './ContactScene'

const services = ['Mix', 'Master', 'Mix + Master', 'Stem Mastering', 'Track Feedback', 'Co-Production', 'EP Pack (2 tracks)', 'Mix + Master + Feedback', 'Not sure — need advice']

const inputStyle = {
  width: '100%', background: 'var(--card)', border: '1px solid var(--border)',
  color: 'var(--white)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
  padding: '0.875rem 1rem', outline: 'none', transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [copied, setCopied] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const bodyText = `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    const subject = encodeURIComponent(`[KODA] ${form.service} — ${form.name}`)
    navigator.clipboard.writeText(bodyText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 4000)
    })
    window.location.href = `mailto:juanpabloaliaga99@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`
  }

  const focusStyle = e => (e.target.style.borderColor = 'var(--accent)')
  const blurStyle  = e => (e.target.style.borderColor = 'var(--border)')

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 3D background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
          <Suspense fallback={null}>
            <ContactScene />
          </Suspense>
        </Canvas>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }} className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>

          {/* Left */}
          <div>
            <p className="label" style={{ marginBottom: '1rem', display: 'block' }}>Contact</p>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Let&apos;s work<br />
              <span style={{ color: 'var(--accent)' }}>on your track.</span>
            </h2>
            <p style={{ color: 'var(--text)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Tell me what you&apos;re working on. I&apos;ll get back to you within 48 hours with a clear answer on whether I can help, what it&apos;ll cost, and what the timeline looks like.
            </p>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <span className="label" style={{ display: 'block', marginBottom: '0.25rem' }}>Email</span>
                <a href="mailto:juanpabloaliaga99@gmail.com" style={{ fontFamily: 'var(--font-mono)', color: 'var(--white)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--white)'}>
                  juanpabloaliaga99@gmail.com
                </a>
              </div>
              <div>
                <span className="label" style={{ display: 'block', marginBottom: '0.25rem' }}>Response time</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--white)', fontSize: '0.875rem' }}>Within 48h</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                </div>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                </div>
              </div>

              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.5rem' }}>Service</label>
                <select name="service" required value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }} onFocus={focusStyle} onBlur={blurStyle}>
                  <option value="" disabled>Select a service...</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.5rem' }}>About your project</label>
                <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                  placeholder="Tell me about your track — genre, vibe, what you're going for, any reference tracks..."
                  style={{ ...inputStyle, resize: 'none' }} onFocus={focusStyle} onBlur={blurStyle} />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>

              {copied && (
                <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.75rem', textAlign: 'center' }}>
                  Message copied to clipboard — paste it in your email if it didn&apos;t auto-fill.
                </p>
              )}

              <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted)', fontSize: '0.7rem', textAlign: 'center' }}>No spam. Just audio.</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
