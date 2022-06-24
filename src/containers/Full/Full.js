import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import Header from "../../views/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../../views/Pages/Home";
import Article from "../../views/Pages/Article";

class Full extends Component {
  componentWillMount() {}

  componentDidUpdate() {
    // //console.log("  .  .  .  .  .  .  .  .  .  .  .   .  /  /  /  /  /  /  /  /  /  /  /  /  Component Did Update In Full.js File .. .. // // ");
  }
  // this.props.logOut ? <Redirect to='/' /> :
  render() {
    const toggle = this.props.toggleSideMenu ? "toggled" : "";
    console.log(toggle);
    return (
      <div className={`page-wrapper chiller-theme ${toggle}`}>
        <Sidebar />

        <main className="page-content">
          <Header />

          <div className="main_page">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/article" component={Article} />
            </Switch>
          </div>

          <Footer />
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => {
  const { toggleSideMenu } = loginReducer;
  return { toggleSideMenu };
};

export default connect(mapStateToProps, {})(Full);
