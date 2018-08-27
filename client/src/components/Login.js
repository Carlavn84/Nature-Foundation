import React, { Component } from 'react';
import axios from 'axios';
import MapContainer from './Map';

axios.defaults.withCredentials = true;

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      error: null
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submitHandler(e){
    e.preventDefault();
    axios
    .post('http://localhost:8000/api/login',this.state)
    .then(res=>{
      if (res.data.error) {
        return this.setState({ error: res.data.message });
      }
      if (res.data.errors) {
        return this.setState({ valerrors: res.data.errors });
      }
      return (window.location = "/mainpage");
    });
  }

  render() {
    return(
      <div className="login">
       {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.submitHandler}>
          <input
            type="email"
            placeholder="email"
            onChange={this.changeHandler}
            name="email"
            id="email"
          />
          <br/>
          <input
            type="password"
            placeholder="password"
            onChange={this.changeHandler}
            name="password"
            id="password"
          />
          <br/>
          <button type="submit">Login</button>
        </form>
      </div>
        );
  }
}
export default Login;
