import React, { Component } from 'react';
import logo from '../img/logo.png';
//import { Navbar, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
class Header extends Component {
  render() {
   
    // if(this.props.data){
    //   var description= this.props.data.description;
    //   var networks= this.props.data.social.map(function(network){
    //     return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    //   })
    // }

    return (
      <header id = "home">           
        <nav id="nav-wrap">

        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          <li><a className="smoothscroll" href="#Demo">Demo</a></li>
          <li><a className="smoothscroll" href="#Download">Download</a></li>
          <li><a className="smoothscroll" href="#About Game">About Us</a></li>
        </ul>

        </nav>     
      <img src={logo} alt="logo" />
   </header>
    );
  }
}

export default Header;
