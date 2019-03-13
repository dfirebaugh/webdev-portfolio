import React from 'react';
import TopBar from './Components/TopBar.js';
import Project from './Components/Project.js';
import About from './Components/About.js';
import App from './App';
import Logos from './Components/Logos.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const Routes = () => (

  <div className="App">
    <TopBar />
    <div className="content-container">
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/project/:projectName" component={Project} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router >
    </div>
    <footer className="App-footer fixed-bottom blue center-on-small-only">
      <Logos />
    </footer>
  </div>
)

export default Routes;