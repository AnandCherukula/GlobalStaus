import React, { Component } from 'react';


import { Link, Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';



import {handleSignUpData} from '../LoginAction'



class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      exitclicked: false
    }
  }

  sidebarToggle(e) {
    e.preventDefault();

    document.body.classList.toggle('sidebar-hidden');
  }


  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  LogOut() {

    this.props.history.push('/');

  }

  render() {

    return (

      <header >   
  <div className="hamberger_menu">
    <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <div className="logo">
      NewsTut
    </div>
    <div className="buttons">
      <button>
      <i class="fa fa-envelope" aria-hidden="true"></i> SignUp
      </button>
      <button className='bg-blue'>
       SupportFQ
      </button>
      <button className='border-thin'>
      <i class="fa fa-user" aria-hidden="true"></i>Login
      </button>
    </div>
      </header>
    );
  }
}

const mapStateToProps = ({loginReducer  }) => {
  const{signUp} = loginReducer;
  return { signUp}

}

export default connect(mapStateToProps, {
  handleSignUpData
})(Header)