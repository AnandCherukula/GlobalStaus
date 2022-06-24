import React, { Component } from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router";
import { Col, Container, Row } from "reactstrap";
import banner from "../../../public/img/avatars/i.jpg";
import banner2 from "../../../public/img/avatars/2.jpg";
import Landing from "../../../public/img/avatars/landing.jpg";
import adv from "../../../public/img/avatars/Advertizement.png";

class Footer extends Component {
  componentDidUpdate() {}
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
      <footer>
        <Container>
          <Row>
            <Col xs={4}>
              <h1 className="text-primary text-uppercase">NewsTUT</h1>
              <p>
                Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <p>
                10-25/A, Street 5, Hitex-road, Rangareddy, Telangana, India.
              </p>
              <p>Phone: +95 (0) 123 456 789 Cell: +95 (0) 123 456 789</p>
            </Col>
            <Col xs={4}>
              <h1>Popular Post</h1>
              <div
                className=" mb-3 border-none footer_card"
                style={{ maxWidth: "540px" }}
                onClick={() => this.props.history.push("/article")}
              >
                <div className="row no-gutters ">
                  <div className="col-md-4">
                    <img src={banner} className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-0 pl-3">
                      <p className="card-text margin-none hover-bg-blue font-weight-bold">
                        This is a wider card with supporting
                      </p>
                      <p className="card-text margin-none">
                        <small className="text-muted margin-none">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" mb-3 border-none footer_card"
                style={{ maxWidth: "540px" }}
                onClick={() => this.props.history.push("/article")}
              >
                <div className="row no-gutters ">
                  <div className="col-md-4">
                    <img src={banner} className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-0 pl-3">
                      <p className="card-text margin-none hover-bg-blue font-weight-bold">
                        This is a wider card with supporting
                      </p>
                      <p className="card-text margin-none">
                        <small className="text-muted margin-none">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" mb-3 border-none footer_card"
                style={{ maxWidth: "540px" }}
                onClick={() => this.props.history.push("/article")}
              >
                <div className="row no-gutters ">
                  <div className="col-md-4">
                    <img src={banner} className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-0 pl-3">
                      <p className="card-text margin-none hover-bg-blue font-weight-bold">
                        This is a wider card with supporting
                      </p>
                      <p className="card-text margin-none">
                        <small className="text-muted margin-none">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div className=" text-dark w-75 h-75 mt-5 m-auto">
                <img src={adv} />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="bottom_footer">
          Copyright ©2022 All rights reserved | This Website is made with by
          Anand Cherukula
        </div>
      </footer>
    );
  }
}

const mapStateToProps = ({}) => {
  // const { LoginDetails, OperatingUser, logOut } = Authentication;
  return {};
};

export default withRouter(connect(mapStateToProps, {})(Footer));
