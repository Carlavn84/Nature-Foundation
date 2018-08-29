import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import Main from './components/Mainpage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MapContainer from './components/Map';
import Login from './components/Login';
<<<<<<< HEAD
import AreaImg from './components/AreaImg';
=======
import Register from './components/AdminRegister';
import AdminNav from './components/AdminNav';
import AdminLogin from './components/AdminLogin';
import DashboardArea from './components/AdminDashboardArea';
import AddPhoto from './components/AddPhoto';
>>>>>>> ccfd6259cd4b6787c2fd1dd34a390a0fa6ffd0c3

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mainpage" component={Main} />
          <Route path="/Login" component={Login}/>
<<<<<<< HEAD
          <Route path="/AreaImg/:id" component={AreaImg}/>
=======
          <Route path='/Admin-panel/Register' component={Register} />
          <Route path='/Adminlogin' component={AdminLogin} />
          <Route path='/Admin-panel/DashboardAreas' component={DashboardArea} />
          <Route path='/Addphoto' component={AddPhoto} />




>>>>>>> ccfd6259cd4b6787c2fd1dd34a390a0fa6ffd0c3
        </Switch>
      </Router>
    );
  }
}

export default App;
