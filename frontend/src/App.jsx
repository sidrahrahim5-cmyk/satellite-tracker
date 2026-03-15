import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PassesSection from './components/PassesSection'
import LiveMap from './components/LiveMap'
import Footer from './components/Footer'
import './styles/Navbar.css'
import './styles/Hero.css'
import './styles/PassesSection.css'
import './styles/LiveMap.css'
import './styles/Footer.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PassesSection />
      <LiveMap />
      <Footer />
    </div>
  )
}

export default App