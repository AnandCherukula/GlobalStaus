import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Test } from './Header/BankManagementAction'
import { withRouter } from 'react-router';

 class Dashboard extends Component {


    constructor(props){
        super(props);
        this.clicked = this.clicked.bind(this) 
    }

    clicked(){
        let value = false;
        this.props.Test(value);
        this.props.history.push('/header');
    }
    render() {
        return (
            <div>
                Dashboard
                <button onClick={this.clicked}>Click me</button>
                
            </div>
        )
    }
}


const mapStateToProps = ({ bankManagement  }) => {
    const { testing } = bankManagement;
    return { testing };
  }
  
  export default connect(mapStateToProps, {
    Test,
  })(Dashboard);
