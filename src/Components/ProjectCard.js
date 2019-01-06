import React, { Component } from 'react';

class ProjectCard extends Component {
  render() {
    const cardContainerStyle = {
      border: '5px solid pink',
      width: '16em',
      height: '12em',
      color: 'white',
      backgroundImage: `url(${this.props.image})`,
      boxShadow: 'inset 0 0 0 100px rgba(36, 70, 105, 0.6)'
    }
    const cardStyle = {
      color: 'white'
    }
    let techBtns = this.props.techs.map(function (item, index) {
      return item + " ";
    })
    return (
      <div className="cardContainer">
        <a className="cardTitle" style={cardStyle} href={this.props.url}>
          <div className="card text-black bg-light" style={cardContainerStyle}>
            <div className="card-body" >
              <h4>{this.props.title}</h4>
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
        {this.props.github ? <a href={this.props.github}>github</a> : ""}
        {this.props.codepen ? <a href={this.props.codepen}>codepen</a> : ""}

      </div>
    );
  }
}

export default ProjectCard;
