
import { connect } from 'react-redux';
import React, { Component } from 'react';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.hideMobile = this.hideMobile.bind(this);
  }

  hideMobile() {
    if (document.body.classList.contains('sidebar-mobile-show')) {
      document.body.classList.toggle('sidebar-mobile-show')
    }
  }

  render() {

     return (
      <div className="sidebar">
      
        sidebar
       
      </div>
    )
  }
}

const mapStateToProps = ({  }) => {

  // const { } = ;
  return { };

}
export default connect(mapStateToProps, {})(Sidebar);
