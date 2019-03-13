import React from 'react';
import jquery from '../images/JQuery_logo.svg';
import reactLogo from '../images/react.svg';
import html5 from '../images/HTML5_logo.svg';
import javascript from '../images/javascript.svg';
import css3 from '../images/css3.svg';
import gopher from '../images/gopher.png';

const Logos = () => {
  return (
    <div className="sideMenu container">
      <img src={gopher} className="App-logo" alt="gopher" />
      <img src={html5} className="App-logo" alt="logo" />
      <img src={css3} className="App-logo" alt="logo" />
      <img src={javascript} className="App-logo" alt="logo" />
      <img src={reactLogo} className="App-logo" alt="logo" />
      <img src={jquery} className="App-logo" alt="logo" />
    </div>
  );
}

export default Logos;
