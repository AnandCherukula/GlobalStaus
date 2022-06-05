import React, { Component } from 'react'


import { connect } from 'react-redux'

import { sendLoginDetails, handleLoginData } from './LoginAction'




class Login extends Component {


  constructor() {
    super();
    this.state = {
      email: '', //A
      password: '',
      error: '',
      response: {},
    }
  }








 

  handleSubmit() {
    var data = {
      username: this.props.login.email,
      pass: this.props.login.password
    }
   

    if (data.username == null || data.username == undefined) {
      return;
    }
    else {
      this.props.sendLoginDetails(data)
    }



  }

  render() {
    return (
      <div className='login_wrapper'>
        <div className='login'>
          <label htmlFor="Email">Email</label>
          <input type="email" id="Email" value={this.props.login.email} name="email" onChange={(e) => this.props.handleLoginData(e.target.name, e.target.value)} /> <br />
          <label htmlFor="Pass">Password</label>
          <input type="password" id="Pass" value={this.props.login.password} name="password" onChange={(e) => this.props.handleLoginData(e.target.name, e.target.value)} /><br />

          <button onClick={() => this.handleSubmit()}>Submit</button>
          <button onClick={() => this.props.history.push("/register")}>SignUp</button>
        </div>
        <br />
        <div>

        </div>
        <div>
          username={this.props.login.email}
          password={this.props.login.password}
        </div>
      </div>






    )
  }
}

const mapStateToProps = ({ loginReducer }) => {
  const { login } = loginReducer;
  return { login }

}

export default connect(mapStateToProps, {
  sendLoginDetails,
  handleLoginData,
})(Login)


