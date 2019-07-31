import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Timeline from './components/Timeline';
import Home from './components/Home';
import PostTemplate from './components/PostTemplate';
import SearchTemplate from './components/SearchTemplate'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/timeline" component={Timeline} />
          <Route exact path="/post" component={PostTemplate} />
          <Route exact path="/search" component={SearchTemplate} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
