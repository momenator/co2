import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Switch>
            <Route path="/about">
              <div>About</div>
            </Route>
            <Route path="/users">
              <div>stuff</div>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
          <Nav />
        </div>
      </Router>
    </div>
  );
}

export default App;
