import React, { Component } from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router";
import LaddaButton, { XL, SLIDE_UP } from "react-ladda";

import { sendLoginDetails, handleLoginData } from "./LoginAction";
import { EXPAND_LEFT, SLIDE_LEFT } from "react-ladda/dist/constants";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "", //A
      password: "",
      error: "",
      response: {},
    };
  }

  handleSubmit() {
    var data = {
      userName: this.props.login.email,
      userPassword: this.props.login.password,
    };

    console.log(data);

    if (data.userName == null || data.userPassword == undefined) {
      return;
    } else {
      this.props.sendLoginDetails(data);
    }
  }

  render() {
    const isLoggedIn = this.props.login.isLoggedIn;
    console.log(this.props.login.isLoggedIn);
    return isLoggedIn ? (
      <Redirect to="/home" />
    ) : (
      <div className="full-bg">
        <div className="svg_background">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#000"
              fillOpacity="1"
              d="M0,128L30,138.7C60,149,120,171,180,192C240,213,300,235,360,229.3C420,224,480,192,540,202.7C600,213,660,267,720,282.7C780,299,840,277,900,256C960,235,1020,213,1080,181.3C1140,149,1200,107,1260,85.3C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="form">
          <div className="input_wrapper cmt-5">
            <label htmlFor="Email" className="feild-label">
              Email
            </label>
            <input
              type="email"
              className="input-feild"
              id="Email"
              value={this.props.login.email}
              name="email"
              onChange={(e) =>
                this.props.handleLoginData(e.target.name, e.target.value)
              }
            />
          </div>
          <div className="input_wrapper cmt-5">
            <label htmlFor="Pass" className="feild-label">
              Password
            </label>
            <input
              type="password"
              className="input-feild"
              id="Pass"
              value={this.props.login.password}
              name="password"
              onChange={(e) =>
                this.props.handleLoginData(e.target.name, e.target.value)
              }
            />
          </div>
          <LaddaButton
            className="btn btn-dark "
            onClick={() => this.handleSubmit()}
            loading={this.props.loader}
            data-style={SLIDE_LEFT}
          >
            Submit
          </LaddaButton>

          {/* <button
            className="btn btn-dark  cm-5"
            onClick={() => this.handleSubmit()}
          >
            Submit
          </button> */}
          <p className="cursor-pointer text-center text-info">
            <a className="mr-3" onClick={() => this.props.history.push("#")}>
              Forgotten account?
            </a>
            <a onClick={() => this.props.history.push("/register")}>New User</a>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => {
  const { login, loader } = loginReducer;
  return { login, loader };
};

export default connect(mapStateToProps, {
  sendLoginDetails,
  handleLoginData,
})(Login);
