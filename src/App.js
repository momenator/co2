import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { SnackbarProvider } from 'notistack';
import Nav from './components/Nav';
import Home from './components/Home';
import Search from './components/Search';
import Footprint from './components/Footprint';
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
                  <Search />
                </Route>
                <Route path="/">
                  <Home/>
                </Route>
              </Switch>
              <Nav />
            </div>
          </Router>
        </div>
      </MuiPickersUtilsProvider>
    </SnackbarProvider>
  );
}

export default App;
