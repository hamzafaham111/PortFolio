import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Particles from 'react-particles-js';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <Particles
    params={{
      Particles: {
        number: {
          value: 60,
          denssity: {
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type: "stars",
          stroke: {
            width: 6,
            color: "#FFFF00"
          }
        },
      }
    }}
    />
    <NavBar/>
    <Header/>
    <AboutMe/>
    <Skills/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
