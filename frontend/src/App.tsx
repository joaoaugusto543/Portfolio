import { useEffect } from 'react'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Technologies from './components/Technologies/Technologies'
import about from '../src/scripts/about'
import technologies from '../src/scripts/technologies'
import projects from '../src/scripts/projects'
import certificates from '../src/scripts/certificates'
import Certificates from './components/Certificates/Certificates'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  useEffect(()=>{
    about()
    technologies()
    certificates()
    projects()
  },[])

  return (
    <>
      <Banner/>
      <About/>
      <Technologies/>
      <Certificates/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
