import React, { Component } from "react";
import axios from "axios";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      error: "",
      loggedIn: false,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    axios({
      method: "post",
      data: {
        username: user.email,
        password: user.password,
      },
      withCredentials: true,
      url: "http://localhost:5000/volunteers/login",
    }).then((res) => {
      this.setState({
        loggedIn: res.data.status,
      });
      console.log(this.state.loggedIn);

      if (this.state.loggedIn) {
        window.location = "/volunteers/homepage";
      } else {
        this.setState({
          error: "Invalid login details",
        });
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div>
            <br />
            <input
              style={{ backgroundColor: "#2734AD", width: "100%" }}
              type="submit"
              value="Login"
              className="btn"
              id="primaryButton"
            />
          </div>
          {this.state.error && (
            <div className="error-message">{this.state.error}</div>
          )}
        </form>
      </div>
    );
  }
}
