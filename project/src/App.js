
import './App.css'
import Header from './Components/Header/Header'
import LinkForm from './Components/LinkForm/LinkForm'
import ImageDisplay from './Components/ImageDisplay/ImageDisplay'
import Particles from 'react-particles-js'
import React, {Component} from 'react'


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

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      url: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
    console.log(this.state.input)
  }
  onButtonSubmit = (onClick, onInputChange) => {
    this.setState({
      url: this.state.input
    })
    console.log(this.state.url)
    document.getElementById("theImage").setAttribute("src", this.state.url)
  }
   
  render() {
    return (
      <div className="App">
        <Particles className="Particles" params={ParticlesConfig} />
        <Header />
        <LinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <ImageDisplay 
           onButtonSubmit={this.onButtonSubmit}
        />
      </div>
    );
  }
}



export default App;
