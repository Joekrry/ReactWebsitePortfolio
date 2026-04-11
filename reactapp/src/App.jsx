import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() 
{
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <WorkExperience />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}

export default App

