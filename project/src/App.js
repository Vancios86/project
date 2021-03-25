
import './App.css'
import Header from './Components/Header/Header'
import LinkForm from './Components/LinkForm/LinkForm'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Particles from 'react-particles-js'
import React, {Component} from 'react'
// import Clarifai from 'clarifai'
// import {ClarifaiStub, grpc} from "clarifai-nodejs-grpc"

// const stub = ClarifaiStub.grpc();

// const metadata = new grpc.Metadata();
// metadata.set("a811cc99ff7234cabb47742da6d179699", "Key Y8ddcea24d66c4b928328a75cedd3d670");


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
    input: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }

  onInputChange (event) {
    this.setState({
      input: event.target.value
    })
  }
  onButtonSubmit (event) {
    console.log("click");
  }
   
  render(){
    return (
      <div className="App">
        <Particles className="Particles" params={ParticlesConfig} />
        <Header />
        <LinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <ImageLinkForm />
      </div>
    );
  }
}



export default App;
