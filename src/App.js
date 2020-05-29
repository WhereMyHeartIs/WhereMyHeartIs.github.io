import React, { Component } from 'react';
import logo from './img/logo.png';
import screen1 from './img/1.png';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component{
  render(){
     return (
        <div className="App">
        <div  className="bg">
        <h1>Where My Heart Is</h1>
        <img src={logo} alt="Logo" />;
        <h1>About Our Game</h1>
        <p className="Intro">About the game place holder 1233333</p>
        <img src={screen1} alt="screen1" />;
        <h1>Game Play</h1>
        <p className="Intro">More Game play gif</p>
        <h1>Avaliable Now For PC</h1>
        <p className="Intro">Windows and Mac Download link</p>
        <h1>About the us</h1>
        <p className="Intro">about us :D team members</p>
        <h1>Random Title</h1>  
        </div>    
        </div>
      );
  }
}
function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}


export default App;

