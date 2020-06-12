import React, { Component } from 'react';
import hand from '../img/Hands.png';
class About extends Component {
  render() {

    return (
       
      <section id="About Game">
     <div className="column" >
         <h1>About our team</h1>
         <h3>Jake Burdick</h3>
         Creative Director 💜 Programmer 💜 Composer/Sound Designer 💜 Co-Author
         <h3>Sean Song</h3>
         Producer 💜 Lead Programmer 💜 VFX Artist
         <h3> Sanchit Keni </h3>
        Gameplay Programmer 💜 UI Programmer
         <h3>Hanette Le</h3>
         Producer 💜 3D Artist/Animator
         <h3>Jeanette Mui</h3>
         Programmer 💜 3D Artist 💜 Level Designer
         <h3>Youyou Zhao</h3>
         Programmer 💜 3D Artist 💜 Level Designer
         <h3>Niccolo Abate</h3>
         3D Artist/Animator 💜 Level Designer
         <h3>Zachary Lu</h3>
         3D Artist
         <h3>Daniel Liao</h3>
        UI Designer/Artist
        <h3>Brent Hopkins</h3>
        Narrative Designer
        <h3>Artis Anderson</h3>
         Voice Actor for Ada
         <h3>Matt Burdick </h3>
        Voice Actor for Dad
        <h3></h3>
               <img src={hand} alt="hand" />
          <h2>contact us: wheremyheartisGame@gmail.com</h2> 
      </div>
 
   </section>
    );
  }
}

export default About;
