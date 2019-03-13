import React, { useState } from 'react';
import ProjectCard from './Components/ProjectCard.js';
import projects from './Components/projectList.js';
import proProjects from './Components/proProjects.js';
import './Solar.css';
import './App.css';

const App = () => {
  const [showTech, setShowTech] = useState('All');
  // declaring a new Set
  const projectSet = new Set();
  // flattening our project list and adding them to the Set
  [].concat.apply([], projects.map(x => x.tech))
    .forEach(x => projectSet.add(x))
  // converting the Set to an Array
  const techs = [...projectSet]

  // const [techs, setTechs] = useState(projectArr)
  const handleClick = param => e => {
    console.log(e)
    console.log(param)
    setShowTech(param)
  }
  const cards = projects.filter(project => {
    return project.tech.some(x => x === showTech)
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

  const proCards = proProjects.filter(project => {
    return project.tech.some(x => x === showTech)
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
  const allPro = proProjects
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

      <div className='page-container'>

        <div className="container" style={{ marginTop: "10vh" }}>
          <h5>{" Technologies I'm working with: "}</h5>

          <div className='tech-list'>
            {
              techs && techs.map((tech, i) => (
                <button
                  key={i}
                  type="button"
                  className="btn btn-success"
                  onClick={handleClick(tech)}>
                  {tech}
                </button>
              ))
            }
            <button
              id='x'
              type="button"
              className="btn btn-secondary"
              onClick={handleClick('All')}>
              X
              </button>

          </div>

        </div>
        <div className="projects">
          {proCards &&
            <div id='professional-projects'>
              <h1>Professional Projects</h1>
              <p> These are projects that I've worked on in a professional setting for clients.</p>
              <div className='cardHolder'>
                {showTech === 'All' ? allPro : proCards}
              </div>
            </div>}
          {
            cards &&
            <div id='personal-projects'>
              <h1>Personal Projects</h1>
              <p>These are personal Projects that I've worked on for fun and for learning.</p>
              <div className='cardHolder'>
                {showTech === 'All' ? allCards : cards}
              </div>
            </div>
          }
        </div>
      </div>
    </div >
  );
}

export default App;
