import Navigation from './components/Navigation'
import TechCarousel from './components/TechCarousel'
import TechStack from './components/TechStack'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import History from './components/History'
import Footer from './components/Footer'
import './App.css'

function App() 
{
  return (
    <div className="App">
      <Navigation />
      <TechCarousel />
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <History />
      <Footer />
    </div>
  )
}

export default App

