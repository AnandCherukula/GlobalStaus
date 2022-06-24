import React, { Component } from "react";

import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import banner from "../../../public/img/avatars/i.jpg";
import banner2 from "../../../public/img/avatars/2.jpg";
import Landing from "../../../public/img/avatars/landing.jpg";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  Banner() {
    return (
      <div className="container-fluid">
        <Row className="mb-5">
          <Col xs={12} md={8}>
            <div
              className="card"
              onClick={() => this.props.history.push("/article")}
            >
              <img className="card-img" src={Landing} />
              <div className="card-img-overlay d-flex flex-column align-items-start justify-content-end text-white ">
                <h5 className="card-title font-weight-bold display-4 text-uppercase hover-bg-blue">
                  Here come the moms in space
                </h5>
                <p className="card-text height-3 display-5 hover-bg-blue">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p className="card-text text-muted d-flex justify-content-between ">
                  <strong className="mr-3">Anand Cherukula </strong>
                  <span> June 19, 2022</span>
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Row className="mb-5">
              <Col xs={12}>
                <div className="card">
                  <img className="card-img" src={banner} />
                  <div className="card-img-overlay d-flex flex-column align-items-start justify-content-end text-white ">
                    <h5 className="card-title font-weight-bold display-5 text-uppercase hover-bg-blue ">
                      Here come the moms in space
                    </h5>
                    <p className="card-text height-3 display-6 hover-bg-blue">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text text-muted d-flex justify-content-between">
                      <strong className="mr-3">Anand Cherukula </strong>
                      <span> June 19, 2022</span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xs={12}>
                <div className="card">
                  <img className="card-img" src={banner2} />
                  <div className="card-img-overlay d-flex flex-column align-items-start justify-content-end text-white ">
                    <h5 className="card-title font-weight-bold  text-uppercase hover-bg-blue">
                      Here come the moms in space
                    </h5>
                    <p className="card-text height-3 hover-bg-blue">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text text-muted d-flex justify-content-between">
                      <strong className="mr-3">Anand Cherukula </strong>
                      <span> June 19, 2022</span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} md={4}>
            <Row className="mb-3">
              <Col xs={12}>
                <div className="custom-card">
                  <h4>Your Advertizement</h4>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xs={12}>
                <div className="custom-card">
                  <Row className="mb-5">
                    <Col xs={12}>
                      <div className="card">
                        <img className="card-img" src={banner} />
                        <div className="card-img-overlay d-flex flex-column align-items-start justify-content-end text-white ">
                          <h5 className="card-title font-weight-bold display-5 text-uppercase hover-bg-blue ">
                            Card title
                          </h5>
                          <p className="card-text height-3 display-6 hover-bg-blue">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <p className="card-text text-muted d-flex justify-content-between">
                            <strong className="mr-3">Anand Cherukula </strong>
                            <span> June 19, 2022</span>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div
                    className="card mb-3 border-none "
                    style={{ maxWidth: "540px" }}
                  >
                    <div className="row no-gutters ">
                      <div className="col-md-4">
                        <img src={banner} className="card-img" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body p-0 pl-3">
                          <h5 className="card-title margin-none">Card title</h5>
                          <p className="card-text margin-none">
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
                </div>
                <div
                  className="card mb-3 border-none "
                  style={{ maxWidth: "540px" }}
                >
                  <div className="row no-gutters ">
                    <div className="col-md-4">
                      <img src={banner} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-0 pl-3">
                        <h5 className="card-title margin-none">Card title</h5>
                        <p className="card-text margin-none">
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
            </Row>
          </Col>
          <Col xs={12} md={8}>
            <div className="custom-card">
              <Row>
                <Col md={5} xs={12}>
                  <h1>Whats New</h1>
                </Col>
                <Col md={7} xs={12}>
                  <Link to={"#"} className="card_links active">
                    Travel
                  </Link>
                  <Link to={"#"} className="card_links">
                    Sports
                  </Link>
                  <Link to={"#"} className="card_links">
                    World
                  </Link>
                  <Link to={"#"} className="card_links">
                    Politics
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col md={7} xs={12}>
                  <div className="card h-100 border-none">
                    <img src={banner2} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h3 className="card-title"> title</h3>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer. This is a wider card with supporting
                        text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={5} xs={12}>
                  <div
                    className="card mb-3 border-none "
                    style={{ maxWidth: "540px" }}
                  >
                    <div className="row no-gutters ">
                      <div className="col-md-4">
                        <img src={banner} className="card-img" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body p-0 pl-3">
                          <h5 className="card-title margin-none">Card title</h5>
                          <p className="card-text margin-none">
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
                    className="card mb-3 border-none"
                    style={{ maxWidth: "540px" }}
                  >
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src={banner} className="card-img" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body margin-none p-0 pl-3 ">
                          <h5 className="card-title margin-none">Card title</h5>
                          <p className="card-text margin-none">
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
                    className="card mb-3 border-none "
                    style={{ maxWidth: "540px" }}
                  >
                    <div className="row no-gutters ">
                      <div className="col-md-4">
                        <img src={banner} className="card-img" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body p-0 pl-3">
                          <h5 className="card-title margin-none">Card title</h5>
                          <p className="card-text margin-none">
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
                    className="card mb-3 border-none"
                    style={{ maxWidth: "540px" }}
                  >
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src={banner} className="card-img" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body margin-none p-0 pl-3 ">
                          <h5 className="card-title margin-none">Card title</h5>
                          <p className="card-text margin-none">
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
              </Row>
            </div>
            <div className="custom-card mt-5">
              <Row>
                <Col>
                  <div className="card h-100 border-none">
                    <h1>Your Second Advertizement</h1>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    return <div>{this.Banner()}</div>;
  }
}

const mapStateToProps = ({ loginReducer }) => {
  const { signUp, loader } = loginReducer;
  return { signUp, loader };
};

export default connect(mapStateToProps, {})(Home);
