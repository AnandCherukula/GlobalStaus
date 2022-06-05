import React, { Component } from 'react';


import { Link, Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';



import {handleSignUpData} from '../../views/LoginAction'



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
header
<input type='text' name="headerSearch" value={this.props.SignUp.headerInput} onChange={(e)  => this.handleSignUpData(e.target.name, e.target.value)}>

</input>
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
