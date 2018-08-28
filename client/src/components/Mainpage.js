import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import Name from './Name';

class Mainpage extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      size:null,
      lat:null,
      lng:null,
      isloggedin:true
    };

    this.getArea();
    axios
    .get("http://localhost:8000/api/isloggedin")
    .then(res => {
      if(!res.data){
        return this.setState({isloggedin: false})
      }
    })
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.getArea = this.getArea.bind(this);
  }

  getArea() {
    axios
    .get("http://localhost:8000/api/showposts")
    .then(posts => this.setState({posts: posts.data}));
  }

  submitHandler(e){
    e.preventDefault();
    axios
    .post("http://localhost:8000/api/addpost", { post: this.state.post })
    .then(res => {
      this.setState({ post: "" });
      this.getArea();
    });
  }

  changeHandler(e){
    this.setState({ post: e.target.value });
  }

  render() {
    return this.state.isloggedin ? (
      <div>
         <button
          onClick={() =>
           axios
           .get("http://localhost:8000/api/logout")
           /*.then(res => this.setState({isloggedin: false}) )} */
           .then(res => (window.location = "/"))} //...or like this
         >log out</button >

         {this.state.name}


        {this.state.posts &&
          this.state.posts.map(post=> {
            return <Post getArea={this.getArea} key={post._id} info={post}/>
        })}
      </div>
    ) : (
      <p>Please login</p>
    );
  }
}
export default Mainpage;
