import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import MapContainer from './Map';

class AreaImg extends Component {

  constructor(props){
// console.log(props);
    super(props);
    this.state={
      info:"",
      name:"",
      size:null,
      lat:null,
      lng:null,
      isloggedin:true
    };

    this.getOne()

    axios
    .get("http://localhost:8000/api/isloggedin")
    .then(res => {
      if(!res.data){
        return this.setState({isloggedin: false})
      }
    })
    this.changeHandler = this.changeHandler.bind(this);
    this.getOne = this.getOne.bind(this);
  }

  componentDidMount(){
    axios
    .get("http://localhost:8000/api/showposts")
    .then(posts => this.setState({posts: posts.data}));
  }
  getArea() {
  }

  getOne() {
    axios
    .get("http://localhost:8000/api/showOne/" + this.props.match.params.id)
    .then(info => this.setState({info: info.data}));
  }
  changeHandler(e){
    this.setState({ post: e.target.value });
  }

  render() {
    var data = this.state.info;
     return this.state.isloggedin ? (
      <div>
      <div>
      <MapContainer />
      </div>

      <div className="login">
         <button
          onClick={() =>
           axios
           .get("http://localhost:8000/api/logout")
           /*.then(res => this.setState({isloggedin: false}) )} */
           .then(res => (window.location = "/"))} //...or like this
         >log out</button >
         <hr/>
        {this.state.posts &&
          this.state.posts.map((post, i)=> {
            let userName= " ";
            if (this.name !== post.user.name){
              this.name = post.user.name;
              userName = "protector: " + this.name;
            }

            return (
                <div key={i}>
                <h4>{userName}</h4>
                </div>
            )
        })}
        <h4>lat:{data.lng}</h4>
        <h4>lng:{data.lat}</h4>
        <h4>size:{data.size}</h4>
      </div>
      </div>
    ) : (
      <p>Please login</p>
    );
  }
}
export default AreaImg;
