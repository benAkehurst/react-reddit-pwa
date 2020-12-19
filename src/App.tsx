import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Home } from './views/Home/Home';
import { Saved } from './views/Saved/Saved';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/saved">Saved</Link>
            </li>
          </ul>
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
