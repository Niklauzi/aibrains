import React, { Component } from 'react';
// import Clarifai from 'clarifai';

import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';
import Particle from './Components/Particles/Particles';
import Footer from './Components/Footer/Footer';

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);

  }

  onButtonSubmit = () =>{
    // console.log('click');
};

  render() {
    return (
      <div className="App">
        <Navigation />
        <Particle />
        <Logo />
        <Rank />
        <ImageLinkForm
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
