import React, { Component } from "react";
import axios from "axios";


class AddPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
             imgUrl: null
      },
      message: null,
      error: ""
    };
  }

  formHandler = e => {
    var formData = this.state.data;
   
    formData[e.target.name] = e.target.value;
    this.setState({
      data: formData
    });
  };
  imageHandler = event => {
    var formData = this.state.data;
    formData[event.target.name] = event.target.files[0];
    this.setState({ data: formData });
  };
  submitHandler = e => {
    console.log(this.state.data);
    e.preventDefault();
    let formInfo = new FormData();
   
    formInfo.append("imgUrl", this.state.data.imgUrl);
    axios
      .post("http://localhost:8000/api/admin/upload", formInfo)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            data: {
              
                imgUrl: null
            },
            message: "Photo was added successfully.",
            error: ""
          });
        }
      })
      .catch(err => {
        this.setState({ error: "Failure uploaded!" });
      });
  };
  render() {
    return (
      <div className="content-wrapper text-center container">
        <h3>Add Photo</h3>
        <br />
        <p> {this.state.error}</p>
        <p className="text-danger">
          {this.state.message && this.state.message}
        </p>
        <form onSubmit={this.submitHandler} enctype="multipart/form-data">
          
         
          <hr />
          <label htmlFor="date">Image (jpg/png)</label>
          <br />
          <input
            style={{ width: "20vmax", margin: "auto", textAlign:'center' }}
            className="form-control"
            type="file"
            name="imgUrl"
            onChange={this.imageHandler}
            // id="price"
          />{" "}
          <br />
          <hr />
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </form>
        <br/>
        <button
          onClick={() => {
            this.props.history.goBack();
          }}
          className="btn btn-info"
        >
          Go Back
        </button>
      </div>
    );
  }
}

export default AddPhoto;

