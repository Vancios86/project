
import './App.css'
import Header from './Components/Header/Header'
import LinkForm from './Components/LinkForm/LinkForm'
import Particles from 'react-particles-js'

const ParticlesConfig = {
    particles: {
      number: {
        value: 123,
        density: {
          enable: true,
          value_area: 777
        } 
      }
    }
}

function App() {
  return (
    <div className="App">
       <Particles className="Particles" params={ParticlesConfig} />
       <Header />
       <LinkForm />
    </div>
  );
}

export default App;
