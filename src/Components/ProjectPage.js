import React from 'react';
import projects from './projectList.js';
import proProjects from './proProjects.js';

const findProject = name => {
  const finder = (arr) => arr.find(x => x.name.toUpperCase() === name.toUpperCase())

  return finder(projects) || finder(proProjects);;
}

const Project = props => {
  const project = findProject(props.match.params.projectName)
  console.log(project)
  const cardContainerStyle = {
    width: '100%',
    height: '50vh',
    color: 'white',
    // backgroundImage: `url(${image})`,
    boxShadow: 'inset 0 0 0 100px rgba(36, 70, 105, 0.6)'
  }
  const cardStyle = {
    color: 'white',
    width: '100%'
  }
  if (!project) {
    return <h1> There is no project with that name! </h1>
  }
  const { title, tech, github, codepen, url } = project;

  return (
    <div>
      <a style={cardStyle} href={url}>
        <h3>
          {project.name}
        </h3>
      </a>
      <div>
        <div className=" text-black bg-light" style={cardContainerStyle}>
          <footer className="cardFooter">Technologies:
            <div>
              {tech}
            </div>
          </footer>
        </div>
        {github ? <a href={github}>github</a> : ""}
        {codepen ? <a href={codepen}>codepen</a> : ""}

      </div>
    </div >
  )
}

export default Project;