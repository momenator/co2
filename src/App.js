import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { SnackbarProvider } from 'notistack';
import Nav from './components/Nav';
import Home from './components/Home';
import Footprint from './components/Footprint';
import CameraComponent from './components/Camera';
import Wait from './components/Wait';
import './App.css';


function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="App">
          <Router>
            <div className="container">
              <Switch>
                <Route path="/footprint">
                  <Footprint />
                </Route>
                <Route path="/search">
                  <Wait />
                </Route>
                <Route path="/camera">
                  <CameraComponent />
                </Route>
                <Route path="/">
                  <Home/>
                </Route>
              </Switch>
              <Nav />
              <Link to="/camera">
                <Fab 
                  style={{ position: 'fixed', bottom: 80, right: 20 }}
                  color="primary" aria-label="add" onClick={() => console.log('blah')}>
                  <PhotoCameraIcon />
                </Fab>
              </Link>
            </div>
          </Router>
        </div>
      </MuiPickersUtilsProvider>
    </SnackbarProvider>
  );
}

export default App;
