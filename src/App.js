import React, { Component } from 'react';
import TopBar from './Components/TopBar.js';
import About from './Components/About.js';
import ProjectCard from './Components/ProjectCard.js';
import projects from './Components/projectList.js';
import Logos from './Components/Logos.js';
// import Social from './Components/Social.js';
// import 'bootstrap/dist/css/bootstrap.css';
import './Solar.css';
import './App.css';





class App extends Component {
  constructor(){
    super()
    this.state = {showTech:'all'}

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    // console.log(e.target.id)

    switch (e.target.id) {
      default :
        break;
      case 'reactBtn':
        this.setState({showTech:'ReactJS'});
        break;
      case 'jqueryBtn':
        this.setState({showTech:'JQuery'});
        break;
      case 'nodeBtn':
        this.setState({showTech:'NodeJS'});
        break;
      case 'expressBtn':
        this.setState({showTech:'ExpressJS'});
        break;
      case 'd3Btn':
          this.setState({showTech:'D3js'});
          break;
      case 'x':
          this.setState({showTech:'all'});
          break;
      }

    }
  render() {

let cards;
let that = this;

if(this.state.showTech === 'all'){
  cards = projects.map(function(card, i){
    return <ProjectCard key={i} codepen={card.codepen} github={card.github} url={card.url} title={card.name} image={card.image}  techs={card.tech}/>
  })
}
else{
  cards = projects.filter(filterByName).map(function(card, i){
    return <ProjectCard key={i} codepen={card.codepen} github={card.github} url={card.url} title={card.name} image={card.image}  techs={card.tech}/>
  })
}

function filterByName(item) {
  let count = 0;
  for(var x =0; x<item.tech.length; x++){
    if (item.tech[x] === that.state.showTech) {
      count ++;
    }
  }
  // console.log(count)
  if(count > 0){
    return true;
  }
  else{
    return false;
  }
}




    return (
      <div className="App">
      <TopBar />


      <div className='page-container'>
      <div className='container'>
      <div className="App-intro">




        <h4>
        {"I'm a web developer and programmer living in Richmond, Virginia. I make web applications, usually with javascript!"}

        </h4>
        </div>
<br></br>
        <div>
          <h4 className='text-primary'>{"Let's work together!"} </h4><code>dustin.a.firebaugh@gmail.com</code>
        </div>
        </div>
<br></br>





<div className="container">
<h5>{" Technologies I'm working with: "}</h5>

<div className='tech-list'>
<button id='reactBtn' type="button" className="btn btn-success" onClick={this.handleClick.bind(this)}>React.js</button>
<button id='jqueryBtn' type="button" className="btn btn-success" onClick={this.handleClick}>JQuery</button>
<button id='nodeBtn' type="button" className="btn btn-success" onClick={this.handleClick}>Node.js</button>
<button id='d3Btn' type="button" className="btn btn-success" onClick={this.handleClick}>D3.js</button>

<button id='x' type="button" className="btn btn-secondary" onClick={this.handleClick}>X</button>

</div>

</div>




        <div id='projects' className="projects ">
        <h2>Projects</h2>
        <div className='cardHolder'>

        {cards}

        </div>
        </div>
</div>


    <div className='aboutContainer'>
    <About />
    </div>



        <footer className="App-footer fixed-bottom blue center-on-small-only">
        <Logos />
        </footer>

      </div>
    );
  }
}

export default App;
