import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Typography } from '@material-ui/core';
import { Home } from './views/Home/Home';
import { Saved } from './views/Saved/Saved';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <AppBar position="static">
            <div className="App_header__link-wrapper">
              <Typography variant="h6">
                <Link to="/" className="App_header__link">
                  Home
                </Link>
              </Typography>
            </div>
            <div className="App_header__link-wrapper">
              <Typography variant="h6">
                <Link to="/saved" className="App_header__link">
                  Saved
                </Link>
              </Typography>
            </div>
          </AppBar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
