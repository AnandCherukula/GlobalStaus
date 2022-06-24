import React, { Component } from "react";
import {
  CONTRACT,
  CONTRACT_OVERLAY,
  EXPAND_LEFT,
  SLIDE_LEFT,
} from "react-ladda/dist/constants";
import LaddaButton from "react-ladda/dist/LaddaButton";

import { connect } from "react-redux";
import { Redirect } from "react-router";

import {
  handleSignUpData,
  sendSignUpDetails,
  clearSignUpDetails,
} from "../LoginAction";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  componentWillUnmount() {
    this.props.clearSignUpDetails();
  }

  sendDataToBackend() {
    var data = {
      userName: this.props.signUp.userName,
      name: this.props.signUp.name,
      eMail: this.props.signUp.email,
      userPassword: this.props.signUp.password,
      mobile: this.props.signUp.phone,
    };
    console.log(data);
    this.props.sendSignUpDetails(data);
  }

  render() {
    const isSignUpSuccess = this.props.isSignUpSuccess;
    console.log(isSignUpSuccess);
    return isSignUpSuccess ? (
      <Redirect to="/login" />
    ) : (
      <div className="full-bg">
        <div className="svg_background">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#2393d3"
              fill-opacity="1"
              d="M0,128L30,138.7C60,149,120,171,180,192C240,213,300,235,360,229.3C420,224,480,192,540,202.7C600,213,660,267,720,282.7C780,299,840,277,900,256C960,235,1020,213,1080,181.3C1140,149,1200,107,1260,85.3C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="form">
          <div className="input_wrapper mt-5">
            <label htmlFor="name" className="feild-label">
              {" "}
              Name
            </label>
            <input
              type="text"
              className="input-feild"
              value={this.props.signUp.name}
              name="name"
              id="name"
              placeholder="john"
              onChange={(e) =>
                this.props.handleSignUpData(e.target.name, e.target.value)
              }
            />
          </div>

          <div className="input_wrapper">
            <label htmlFor="email" className="feild-label">
              {" "}
              Email
            </label>
            <input
              type="email"
              className="input-feild"
              value={this.props.signUp.email}
              name="email"
              id="email"
              placeholder="john@xyz.com"
              onChange={(e) =>
                this.props.handleSignUpData(e.target.name, e.target.value)
              }
            />
          </div>

          <div className="input_wrapper">
            <label htmlFor="userName" className="feild-label">
              {" "}
              userName
            </label>
            <input
              type="text"
              className="input-feild"
              value={this.props.signUp.userName}
              name="userName"
              id="userName"
              placeholder="JohnDiy"
              onChange={(e) =>
                this.props.handleSignUpData(e.target.name, e.target.value)
              }
            />
          </div>

          <div className="input_wrapper">
            <label htmlFor="password" className="feild-label">
              {" "}
              Password
            </label>
            <input
              type="password"
              className="input-feild"
              value={this.props.signUp.password}
              name="password"
              id="password"
              onChange={(e) =>
                this.props.handleSignUpData(e.target.name, e.target.value)
              }
            />
          </div>

          <div className="input_wrapper">
            <label htmlFor="phone" className="feild-label">
              Contact
            </label>
            <input
              type="text"
              className="input-feild"
              value={this.props.signUp.phone}
              name="phone"
              id="phone"
              placeholder="9854665232"
              onChange={(e) =>
                this.props.handleSignUpData(e.target.name, e.target.value)
              }
            />
          </div>

          <LaddaButton
            className="btn btn-dark "
            onClick={() => this.sendDataToBackend()}
            loading={this.props.loader}
            data-style={EXPAND_LEFT}
          >
            Submit
          </LaddaButton>
          {/* <button
            className="btn btn-primary  cm-5"
            onClick={() => this.sendDataToBackend()}
          >
            Send
          </button> */}
          <p className="cursor-pointer text-center text-info">
            <a onClick={() => this.props.history.push("/login")}>
              Already A Existing User
            </a>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => {
  const { signUp, isSignUpSuccess, loader } = loginReducer;
  return { signUp, isSignUpSuccess, loader };
};

export default connect(mapStateToProps, {
  handleSignUpData,
  sendSignUpDetails,
  clearSignUpDetails,
})(SignUp);
