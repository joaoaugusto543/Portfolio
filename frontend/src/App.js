import './App.css';
import About from './Pages/About/About';
import Banner from './Pages/Banner/Banner';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Banner/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
