import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'



// import { Route,  Router, Switch, Link } from 'react-router';

import logo from './logo.svg';
import Home from './page/home'
import MapPage from './page/map';
import PromiseDemo from './page/promise';
import MyPromiseDemo from './page/promise/MyPromise/index';

import ReflectDemo from './page/reflect';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path='/map' component={MapPage} />
              <Route path='/promise' component={PromiseDemo} />
              <Route path='/mypromise' component={MyPromiseDemo} />
              <Route path='/reflect' component={ReflectDemo} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
