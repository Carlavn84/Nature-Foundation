import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import Main from './components/Mainpage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MapContainer from './components/Map';
import Login from './components/Login';
import Register from './components/AdminRegister';
import AdminNav from './components/AdminNav';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mainpage" component={Main} />
          <Route path="/Map" component={MapContainer}/>
          <Route path="/Login" component={Login}/>
          <Route path='/Admin-panel/Register' component={Register} />

        </Switch>
      </Router>
    );
  }
}

export default App;
