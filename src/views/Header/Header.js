import React, { Component } from "react";

import { withRouter } from "react-router";

import { Link, Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import user from "../../../public/img/avatars/i.jpg";
import { handleSignUpData, handlogOut, toggleSideBar } from "../LoginAction";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exitclicked: false,
    };
  }

  sidebarToggle(e) {
    this.props.toggleSideBar();
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle("sidebar-mobile-show");
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle("aside-menu-hidden");
  }

  LogOut() {
    this.props.handlogOut();
    this.props.history.push("/");
  }

  render() {
    const isLoggedIn = this.props.login.isLoggedIn;
    return (
      <header>
        <div className="hamberger_menu" onClick={() => this.sidebarToggle()}>
          <a id="show-sidebar" className="toggle-button" href="#">
            <i className="fas fa-bars"></i>
          </a>
        </div>
        <div
          className="logo cursor-pointer"
          onClick={() => this.props.history.push("/")}
        >
          NewsTut
        </div>

        {isLoggedIn ? (
          <div className="buttons  d-flex align-items-center ">
            <div
              className="header-user-pic cursor-pointer "
              onClick={() => this.sidebarToggle()}
            >
              <img className="" src={user} />
            </div>
            <button className="border-thin" onClick={() => this.LogOut()}>
              <i className="fa fa-sign-out"></i>LogOut
            </button>
          </div>
        ) : (
          <div className="buttons">
            <button
              className="border-none"
              onClick={() => this.props.history.push("/register")}
            >
              <i className="fa fa-envelope" aria-hidden="true"></i> SignUp
            </button>
            <button className="bg-blue">SupportFQ</button>
            <button
              className="border-thin"
              onClick={() => this.props.history.push("/login")}
            >
              <i className="fa fa-user" aria-hidden="true"></i>Login
            </button>
          </div>
        )}
      </header>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => {
  const { signUp, login } = loginReducer;
  return { signUp, login };
};

export default withRouter(
  connect(mapStateToProps, {
    handleSignUpData,
    handlogOut,
    toggleSideBar,
  })(Header)
);
