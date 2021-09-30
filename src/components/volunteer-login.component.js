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
    }).then((res) => console.log(res));
    window.location = "/volunteers/homepage";
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
              type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div>
          <br/>
            <input style={{backgroundColor: '#2734AD', width: '100%'}}
              type="submit"
              value="Login"
              className="primaryButton"
            />
          </div>
        </form>
      </div>
    );
  }
}
