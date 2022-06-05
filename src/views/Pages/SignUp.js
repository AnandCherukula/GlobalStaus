import React, { Component } from 'react'


import { connect } from 'react-redux'

import {handleSignUpData,sendSignUpDetails} from '../LoginAction'

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
        name:'',
     }
  }

  render() {
    return (
   <div>
       <div className='register_input'>
       <label htmlFor='name' > Name</label>
       <input type='text' value={this.props.signUp.name} name="name"  id="name" placeholder='john' onChange={(e) => this.props.handleSignUpData(e.target.name, e.target.value)}/>
       </div>

       <div className='register_input'>
       <label htmlFor='email' > Email</label>
       <input type='email' value={this.props.signUp.email} name="email"  id="email" placeholder='john@xyz.com' onChange={(e) => this.props.handleSignUpData(e.target.name, e.target.value)}/>
       </div>

       <div className='register_input'>
       <label htmlFor='userName' > userName</label>
       <input type='text' value={this.props.signUp.userName} name="userName"  id="userName" placeholder='JohnDiy' onChange={(e) => this.props.handleSignUpData(e.target.name, e.target.value)}/>
       </div>

       <div className='register_input'>
       <label htmlFor='password' > Password</label>
       <input type='password' value={this.props.signUp.password} name="password"  id="password" onChange={(e) => this.props.handleSignUpData(e.target.name, e.target.value)}/>
       </div>

       <div className='register_input'>
       <label htmlFor='phone' > Contact</label>
       <input type='text' value={this.props.signUp.phone} name="phone"  id="phone" placeholder='9854665232' onChange={(e) => this.props.handleSignUpData(e.target.name, e.target.value)}/>
       </div>

       <button onClick={this.props.sendSignUpDetails()}>Send

       </button>
       <button onClick={() => this.props.history.push("/")}>Login</button>
      
   </div>
    )
  }
}

const mapStateToProps = ({loginReducer  }) => {
  const{signUp} = loginReducer;
  return {  signUp}

}

export default connect(mapStateToProps, {
    handleSignUpData,sendSignUpDetails
})(SignUp)