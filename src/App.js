import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Fab from '@material-ui/core/Fab';
import MicIcon from '@material-ui/icons/Mic';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { SnackbarProvider } from 'notistack';
import Nav from './components/Nav';
import Home from './components/Home';
import Footprint from './components/Footprint';
import CameraComponent from './components/Camera';
import Wait from './components/Wait';
import { addUserData } from './lib/data';
import './App.css';

function App() {
  const [micOn, setMicOn] = useState(false);
  
  const [randomState, setRandomState] = useState(0);

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
              <Fab 
                style={{ position: 'fixed', bottom: 150, right: 20 }}
                color={ micOn ? "secondary" : "primary" } aria-label="add" onClick={() => {
                  setMicOn(!micOn);
                  if (micOn === true) {
                    console.log('add stuff!');
                    addUserData({ 
                      unit: 'kg',
                      date: new Date(),
                      choice: 'Breakfast',
                      rawValue: 0.2,
                      computedValue: 0.531,
                    });

                    addUserData({ 
                      unit: 'km',
                      date: new Date(),
                      choice: 'Electric Vehicle MPV Electric',
                      rawValue: 10,
                      computedValue: 1.828,
                    });
                    
                    setRandomState(1);
                  }
                }}>
                <MicIcon />
              </Fab>
            </div>
          </Router>
        </div>
      </MuiPickersUtilsProvider>
    </SnackbarProvider>
  );
}

export default App;
