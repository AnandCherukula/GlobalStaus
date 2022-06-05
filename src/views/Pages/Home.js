
import React, { Component } from 'react'


import { connect } from 'react-redux'


class Home extends Component {
  constructor() {
    super();
    this.state = {
        name:'',
     }
  }

  render() {
    return (
   <div>
  
   </div>
    )
  }
}

const mapStateToProps = ({loginReducer  }) => {
  const{signUp} = loginReducer;
  return {  signUp}

}

export default connect(mapStateToProps, {
    
})(Home)