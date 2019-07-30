import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/header" component={Header} />
        </Switch>
      </div>
    );
  }
}

export default App;
