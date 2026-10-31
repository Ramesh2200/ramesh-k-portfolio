import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import SoftSkills from './components/SoftSkills'
import Footer from './components/Footer'
import { leadershipList } from './data/portfolioData'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Projects />
      {leadershipList && leadershipList.length > 0 && <Leadership />}
      <SoftSkills />
      <Footer />
    </>
  )
}

export default App
