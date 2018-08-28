import React, { Component } from 'react';
import axios from 'axios';

class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var post = this.props.info;
    // console.log();
    return(
      <div>
         <h4>Hello {post.user.name}</h4>
      </div>
    );
  }
}
export default Name;
