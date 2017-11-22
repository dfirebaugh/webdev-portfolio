import React, { Component } from 'react';
import df from '../images/df.jpg';
import github from '../images/GitHub-Mark-32px.png';
import linkedin from '../images/linkedin.svg';
// import Social from './Social.js';

class About extends Component {
  render() {
    const photoStyle = {
      // width:'250px',
      height:'200px'
    }
    const aboutMe = {
      // height:'200px'
    }
    return (
      <div id='about' className="aboutMe container col-md-4">
      <div style={aboutMe} className="jumbotron ">
      <img style={photoStyle} className='selfPhoto' alt='selfphoto' src={df}></img>
      <h3>Dustin Firebaugh</h3>
      {
        "I previously worked as a Sr. Systems Engineer for many years.  After finding a passion for programming, I decided to transition into a role as a web developer.  I've been Freelancing primarily as a frontend web developer."

      }

      <footer className="aboutFooter col-md-14">

      <a href='https://github.com/dfirebaugh' >  <img src={github} className="App-logo" alt="logo" /></a>
        <a href='https://linkedin.com/in/dustin-firebaugh-a89aa420'><img src={linkedin} className="App-logo" alt="logo" /></a>
        </footer>
       </div>
      </div>
    );
  }
}

export default About;
