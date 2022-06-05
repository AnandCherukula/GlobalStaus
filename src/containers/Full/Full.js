import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import Header from '../../views/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import Home from '../../views/Pages/Home';




class Full extends Component {

  componentWillMount() {
    }

  componentDidUpdate() {
    // //console.log("  .  .  .  .  .  .  .  .  .  .  .   .  /  /  /  /  /  /  /  /  /  /  /  /  Component Did Update In Full.js File .. .. // // ");
  }
  // this.props.logOut ? <Redirect to='/' /> :
  render() {
    return <div >
      <Header />
      <div className="main"> 
      <Sidebar />
        <main  >

          <Container > 
            <Switch>
            <Route exact path='/home' component={Home} />
            </Switch>
          </Container>
        </main>
      </div>
<Footer />
      
    </div>
    
  }
}



const mapStateToProps = ({}) =>{

}

export default connect(mapStateToProps, {

})(Full);
