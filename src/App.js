import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Timeline from './components/Timeline';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/timeline" component={Timeline} />
        </Switch>
      </div>
    );
  }
}

export default App;
