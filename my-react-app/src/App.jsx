import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import History from './components/History'
import Blog from './components/Blog'
import Footer from './components/Footer'
import './App.css'

function App() 
{
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <History />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

