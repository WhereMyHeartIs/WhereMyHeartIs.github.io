import React, { Component } from 'react';
import screen1 from '../img/1.png';
import gif1 from '../img/screen1.gif';
import gif2 from '../img/screen2.gif';
import poster from '../img/poster.png';
import ReactPlayer from 'react-player';
class Demo extends Component {
  render() {
    return (
      <section id="Demo">
        <div className="row">
          <h1>About Our Game</h1>
            <h3>3D puzzle game </h3>
          <p className="Intro">A first person 3D narrative puzzle game about Ada, a college student whose passion for art conflicts with her plans for the future. The game world consists of two overlapping versions of the same space: a real world, and a heart world. The player can use a heart shaped lens to replace things in the real world with what they can see in the heart world in order to solve puzzles and find a way forward.
</p>
          <p>Where My Heart Is is an in-development UCSC Senior Capstone Game.</p>
          <img src={poster} alt="poster" width="720" height="640"/>
          <column>
             <img src={gif1} alt="gif1"  width="480" height="270"/>
                
             <img src={gif2} alt="gif2"  width="480" height="270" />
<center>
             <ReactPlayer url='https://youtu.be/eZAfnXwBh7M' />
             <h3>Tutorial </h3>
             <ReactPlayer url='https://youtu.be/5EaufDKr_A0'/>
             </center>
          </column>
        </div>
      </section>
    );
  }
}


export default Demo;


