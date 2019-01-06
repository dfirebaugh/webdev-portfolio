import React, { Component } from 'react';
import TopBar from './Components/TopBar.js';
import About from './Components/About.js';
import ProjectCard from './Components/ProjectCard.js';
import projects from './Components/projectList.js';
import Logos from './Components/Logos.js';
import './Solar.css';
import './App.css';





class App extends Component {
  constructor() {
    super()
    this.state = { showTech: 'All' }

    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    // declaring a new Set
    const projectSet = new Set();
    // flattening our project list and adding them to the Set
    [].concat.apply([], projects.map(x => x.tech))
      .forEach(x => projectSet.add(x))
    // converting the Set to an Array
    const projectArr = [...projectSet]

    this.setState({ techs: projectArr })
    console.log(projectArr)
  }
  handleClick = param => e => {
    console.log(e)
    console.log(param)
    this.setState({ showTech: param })
  }
  render() {
    const cards = projects.filter(project => {
      return project.tech.some(x => x === this.state.showTech)
    }).map((card, i) => (
      <ProjectCard
        key={i}
        codepen={card.codepen}
        github={card.github}
        url={card.url}
        title={card.name}
        image={card.image}
        techs={card.tech} />
    ))
    const allCards = projects
      .map((card, i) => (
        <ProjectCard
          key={i}
          codepen={card.codepen}
          github={card.github}
          url={card.url}
          title={card.name}
          image={card.image}
          techs={card.tech} />
      ))
    return (
      <div className="App">
        <TopBar />


        <div className='page-container'>
          <div className='container'>
            <div className="App-intro">
              <h4>
                {`I'm a software developer 
                living in Richmond, Virginia!`}
              </h4>
            </div>
            <br></br>
            <div>
              <h4 className='text-primary'>{"Let's work together!"} </h4>
              <code>dustin.a.firebaugh@gmail.com</code>
            </div>
          </div>
          <br></br>

          <div className="container">
            <h5>{" Technologies I'm working with: "}</h5>

            <div className='tech-list'>
              {
                this.state.techs && this.state.techs.map(tech => (
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleClick(tech)}>
                    {tech}
                  </button>
                ))
              }
              <button
                id='x'
                type="button"
                className="btn btn-secondary"
                onClick={this.handleClick('All')}>
                X
              </button>

            </div>

          </div>




          <div id='projects' className="projects ">
            <h2>Projects</h2>
            <div className='cardHolder'>

              {this.state.showTech === 'All' ? allCards : cards}

            </div>
          </div>
        </div>


        <div className='aboutContainer'>
          <About />
        </div>



        <footer className="App-footer fixed-bottom blue center-on-small-only">
          <Logos />
        </footer>

      </div >
    );
  }
}

export default App;
