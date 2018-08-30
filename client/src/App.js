import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import Main from './components/Mainpage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MapContainer from './components/Map';
import Login from './components/Login';
import AreaImg from './components/AreaImg';
<<<<<<< HEAD
import Register from './components/AdminRegister';
import AdminNav from './components/AdminNav';
import AdminLogin from './components/AdminLogin';
import DashboardArea from './components/AdminDashboardArea';
import AddPhoto from './components/AddPhoto';
=======
>>>>>>> 176deedafef5bf3051124ce8528174912722bb23

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mainpage" component={Main} />
          <Route path="/Login" component={Login}/>
          <Route path="/AreaImg/:id" component={AreaImg}/>
<<<<<<< HEAD
          <Route path='/Admin-panel/Register' component={Register} />
          <Route path='/Adminlogin' component={AdminLogin} />
          <Route path='/Admin-panel/DashboardAreas' component={DashboardArea} />
          <Route path='/Addphoto' component={AddPhoto} />

=======
>>>>>>> 176deedafef5bf3051124ce8528174912722bb23
        </Switch>
      </Router>
    );
  }
}

export default App;
