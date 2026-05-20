import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Music from './components/Music'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: 'var(--black)', color: 'var(--text)' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Music />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
