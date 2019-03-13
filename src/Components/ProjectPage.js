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

  if (!project) {
    return <h1> There is no project with that name! </h1>
  }
  const { title, tech, github, codepen, url } = project;

  return (
    <div>
      <h3>
        {project.name}
      </h3>
      <div className="cardContainer">
        <a className="cardTitle" href={url}>
          <div className="card text-black bg-light" >
            <div className="card-body" >
              <h4>{title}</h4>
              <div>

                <br></br>
              </div>
              <footer className="cardFooter">Technologies:
                <div>
                  {tech}
                </div>
              </footer>
            </div>
          </div>
        </a>
        {github ? <a href={github}>github</a> : ""}
        {codepen ? <a href={codepen}>codepen</a> : ""}

      </div>
    </div>
  )
}

export default Project;