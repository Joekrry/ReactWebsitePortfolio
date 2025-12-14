import Navigation from './components/Navigation'
import TechCarousel from './components/TechCarousel'
import TechStack from './components/TechStack'
import Hero from './components/Hero'
import About from './components/About'
import History from './components/History'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() 
{
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Footer />
    </div>
  )
}

export default App

