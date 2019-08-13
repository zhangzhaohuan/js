import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'



// import { Route,  Router, Switch, Link } from 'react-router';

import logo from './logo.svg';
import Home from './page/home'
import MapPage from './page/map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path='/map' component={MapPage} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
