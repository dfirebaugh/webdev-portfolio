import React from 'react';

const ProjectCard = ({ title, image, url, techs, github, codepen }) => {
  const cardContainerStyle = {
    width: '16em',
    height: '12em',
    color: 'white',
    backgroundImage: `url(${image})`,
    boxShadow: 'inset 0 0 0 100px rgba(36, 70, 105, 0.6)'
  }
  const cardStyle = {
    color: 'white'
  }
  let techBtns = techs.map(function (item, index) {
    return item + " ";
  })
  return (
    <div className="cardContainer">
      <a className="cardTitle" style={cardStyle} href={`project/${title}`}>
        <div className="card text-black bg-light" style={cardContainerStyle}>
          <div className="card-body" >
            <h4>{title}</h4>
            <div>

              <br></br>
            </div>
            <footer className="cardFooter">Technologies:
                <div>
                {techBtns}
              </div>
            </footer>
          </div>
        </div>
      </a>
      {github ? <a href={github}>github</a> : ""}
      {codepen ? <a href={codepen}>codepen</a> : ""}

    </div>
  );
}

export default ProjectCard;
