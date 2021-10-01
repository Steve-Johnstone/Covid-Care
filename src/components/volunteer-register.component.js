import React, { Component } from "react";
import axios from "axios";

export default class RegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePostcode = this.onChangePostcode.bind(this);
    this.onChangeTask = this.onChangeTask.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      potscode: "",
      task: "",
      password: "",
      error: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePostcode(e) {
    this.setState({
      postcode: e.target.value,
    });
  }

  onChangeTask(e) {
    this.setState({
      task: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const volunteer = {
      name: this.state.name,
      email: this.state.email,
      postcode: this.state.postcode,
      task: this.state.task,
      password: this.state.password,
    };

    axios
      .post("http://localhost:5000/volunteers/register", volunteer)
      .then((res) => {
        if (res.data.error) {
          this.setState({
            error: res.data.error,
          });
        }
        if (res.data.status) {
          window.location = "/volunteers/login";
        }
      });
  }

  render() {
    const registrationBadgeStyle = {
      backgroundColor: "#A78080",
      color: "white",
      textAlign: "center",
      padding: "7px",
      marginBottom: 15,
    };

    return (
      <div>
        <h5 style={registrationBadgeStyle}>Register as Volunteer</h5>
        <form onSubmit={this.onSubmit}>
          <div className="form-group mt-2">
            <label>Full name</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group mt-2">
            <label>Email</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group mt-2">
            <label>Postcode</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.postcode}
              onChange={this.onChangePostcode}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">
              I need help with...
            </label>
            {/* <input
              type="text"
              required
              className="form-control"
              value={this.state.task}
              onChange={this.onChangeTask}
            /> */}
            <select
              type="text"
              required
              className="form-select"
              id="exampleFormControlSelect1"
              value={this.state.task}
              onChange={this.onChangeTask}
            >
              <option>Food shopping</option>
              <option>Dog walking</option>
              <option>Going to a pharmacy</option>
              <option>Delivery</option>
            </select>
          </div>

          <div className="form-group mt-2">
            <label>Password</label>
            <input
              type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="footer">
            <input
              type="submit"
              value="Register"
              id="primaryButton"
              className="btn"
            />
          </div>
        </form>
        {this.state.error && (
          <div className="error-message">{this.state.error}</div>
        )}
      </div>
    );
  }
}
