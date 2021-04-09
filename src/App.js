import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: 'YOUR API KEY HERE'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {  
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
 
  onInputChange = (event) => {
    console.log(event);
  }

  onButtonSubmit = () => {
    console.log()
  }


  render() { 
    return (  
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
      </div>
    );
  }
}
 
export default App;