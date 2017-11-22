import React, { Component } from 'react';
import Resume from '../dustin.firebaugh.resume.pdf';
// import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


class TopBar extends Component {

  render() {
    return (
      <div id='topBar' className="topBar">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="http://dfire.io">DFire.io</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <a className="nav-link" href="#topBar">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#projects">Projects</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="http://dfire.net">Blog</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href={Resume}>Resume</a>
      </li>


      </ul>
      </div>
      </nav>
      </div>
    );
  }
}

export default TopBar;


// <DropdownMenu>
//   <DropdownItem header>Header</DropdownItem>
//   <DropdownItem disabled>Action</DropdownItem>
//   <DropdownItem>Another Action</DropdownItem>
//   <DropdownItem divider />
//   <DropdownItem>Another Action</DropdownItem>
// </DropdownMenu>

// <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// <a className="navbar-brand" href="_blank">DFire.io</a>
// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
// <span className="navbar-toggler-icon"></span>
// </button>
//
// <div className="collapse navbar-collapse" id="navbarColor02">
// <ul className="navbar-nav mr-auto">
// <li className="nav-item active">
// <a className="nav-link" href="_blank">Home <span className="sr-only">(current)</span></a>
// </li>
// <li className="nav-item">
// <a className="nav-link" href="_blank">About</a>
// </li>
// <li className="nav-item">
// <a className="nav-link" href="_blank">Projects</a>
// </li>
// <li className="nav-item">
// <a className="nav-link" href="_blank">Blog</a>
// </li>
// <li className="nav-item">
// <a className="nav-link" href="_blank">Tools</a>
// </li>
//
// </ul>
// </div>
// </Nav>




// <Nav tabs>
//   <div className="navbar-brand" href="_blank">DFire.io</div>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
//   <span className="navbar-toggler-icon"></span>
//   </button>
//
//     <NavItem>
//       <NavLink href="#" active>Link</NavLink>
//     </NavItem>
//     <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//       <DropdownToggle nav caret>
//         Dropdown
//       </DropdownToggle>
//
//     </Dropdown>
//     <NavItem>
//       <NavLink href="#">Projects</NavLink>
//     </NavItem>
//     <NavItem>
//       <NavLink href="#">Another Link</NavLink>
//     </NavItem>
//     <NavItem>
//       <NavLink disabled href="#">Disabled Link</NavLink>
//     </NavItem>
//   </Nav>




// <li className="nav-item dropdown show">
// <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Dropdown</a>
// <div className="dropdown-menu show toggle-thing" x-placement="bottom-start" >
// <a className="dropdown-item" href="#">Action</a>
// <a className="dropdown-item" href="#">Another action</a>
// <a className="dropdown-item" href="#">Something  here</a>
// <div className="dropdown-divider"></div>
// <a className="dropdown-item" href="#">Separated link</a>
// </div>
// </li>
