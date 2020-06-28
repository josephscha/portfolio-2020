import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home, AboutMe, ContactMe, Projects, Resume, Sidebar} from './Components'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
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

        <Sidebar/>
      </div>
    </Router>
  );
}

export default App;
