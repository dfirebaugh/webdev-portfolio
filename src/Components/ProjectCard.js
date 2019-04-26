import React from "react";

const ProjectCard = props => {
  const cardContainerStyle = {
    // border: '5px solid pink',
    width: "16em",
    height: "12em",
    color: "white",
    backgroundImage: `url(${props.image})`,
    boxShadow: "inset 0 0 0 100px rgba(36, 70, 105, 0.6)"
  };
  const cardStyle = {
    color: "white"
  };
  let techBtns = props.techs.map(function(item, index) {
    return item + " ";
  });
  return (
    <div className="cardContainer">
      <a className="cardTitle" style={cardStyle} href={props.url}>
        <div className="card text-black bg-light" style={cardContainerStyle}>
          <div className="card-body">
            <h4>{props.title}</h4>
            <div>
              <br />
            </div>
            <footer className="cardFooter">
              Technologies:
              <div>{techBtns}</div>
            </footer>
          </div>
        </div>
      </a>
      {props.github ? <a href={props.github}>github</a> : ""}
      {props.codepen ? <a href={props.codepen}>codepen</a> : ""}
    </div>
  );
};

export default ProjectCard;
