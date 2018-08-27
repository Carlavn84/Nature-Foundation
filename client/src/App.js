import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import Main from './components/Mainpage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MapContainer from './components/Map';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mainpage" component={Main} />
          <Route exact path="/Map" component={MapContainer}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
