import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Demo from './components/Demo';
import Download from './components/Download';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      aboutus: {},
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }
  getInfo(){
    $.ajax({
      url:'./aboutUs.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({aboutUs: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getInfo();
  }


  render(){
     return (
        <div className="App">
          <div  className="bg">
            <Header data={this.state.aboutus.main}/>
            <Demo data={this.state.aboutus.main}/>
            <Download data = {this.state.aboutus.main}/>
            <About data={this.state.aboutus.main}/>
          </div>    
        </div>
      );
  }
}


export default App;

