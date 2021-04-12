import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Particles from 'react-particles-js';

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
    </>
  )
}

export default App;
