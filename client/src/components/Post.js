import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    this.voteHandler = this.voteHandler.bind(this);
  }

  voteHandler() {
    console.log(this.props.info._id);
    axios
    .post("http://localhost:8000/api/postupvote/" + this.props.info._id)
    .then(res => {
      this.props.getposts();
    });
  }

  render() {
    var post = this.props.info;
    return(
      <div>
        <ul>
          <li>post: {post.post}</li>
          <li>likes: {post.vote}</li>
          <li>by: {post.user.username}</li>
        </ul>
        <button onClick={this.voteHandler}>Upvote</button>
      </div>
    );
  }
}
export default Post;
