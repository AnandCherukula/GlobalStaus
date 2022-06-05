
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withRouter } from "react-router";





class Footer extends Component {

  componentDidUpdate() {
  
  }
  render() {

    // let roleName = this.props.LoginDetails.roleName;
    // let value = roleName == "Admin" ? "rgb(0, 135, 214)" :
    //   roleName == "Retailer" || roleName == "Agent" ? "rgb(248, 176, 24)" :
    //     roleName == "FSE" ? "rgba(88, 0, 232, 0.63)" :
    //       roleName == "Finance Executive" ? "rgb(116, 204, 75)" :
    //         roleName == "Finance Head" ? "rgb(116, 204, 75)" :
    //           "rgb(0, 135, 214)";

    // let ShowWallet = roleName == "Admin" || roleName == "Finance Executive" || roleName == "Finance Head" ? false : true;
    // //console.log(ShowWallet)
    return (
      <footer >

footer
      </footer>
    )
  }
}




const mapStateToProps = ({  }) => {
  // const { LoginDetails, OperatingUser, logOut } = Authentication;
  return {  };
};

export default withRouter(connect(mapStateToProps, {

})(Footer));
