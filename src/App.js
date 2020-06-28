import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home, AboutMe, ContactMe, Projects, Resume, Navigation} from './Components'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/aboutme">
            <AboutMe/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contactme">
            <ContactMe/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
