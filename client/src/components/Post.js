import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var post = this.props.info;
    // console.log();
    return(
      <div>
        <ul>
          <li>size: {post.size}</li>
          <li>lat: {post.lat}</li>
          <li>lng: {post.lng}</li>
        </ul>
      </div>
    );
  }
}
export default Post;
