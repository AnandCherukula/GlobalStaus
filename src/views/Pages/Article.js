import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import banner from "../../../public/img/avatars/i.jpg";
import banner2 from "../../../public/img/avatars/2.jpg";
import Landing from "../../../public/img/avatars/landing.jpg";

class Article extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="m-3">
          <Col xs={12} md={8}>
            <div className="">
              <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-ride="carousel"
              >
                <div class="carousel-inner " style={{ height: "500px" }}>
                  <div class="carousel-item active h-100">
                    <img src={Landing} class="d-block w-100 h-100 " alt="..." />
                  </div>
                  <div class="carousel-item h-100">
                    <img src={banner2} class="d-block w-100 h-100" alt="..." />
                  </div>
                  <div class="carousel-item h-100">
                    <img src={banner} class="d-block w-100 h-100" alt="..." />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleFade"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleFade"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              <div className="article_description">
                <h2>Here come the moms in space</h2>
                <p>
                  Moms are like…buttons? Moms are like glue. Moms are like pizza
                  crusts. Moms are the ones who make sure things happen—from
                  birth to school lunch.
                </p>
                <p>
                  My hero when I was a kid was my mom. Same for everyone I knew.
                  Moms are untouchable. They’re elegant, smart, beautiful,
                  kind…everything we want to be. At 29 years old, my favorite
                  compliment is being told that I look like my mom. Seeing
                  myself in her image, like this daughter up top, makes me so
                  proud of how far I’ve come, and so thankful for where I come
                  from. the refractor telescope uses a convex lens to focus the
                  light on the eyepiece. The reflector telescope has a concave
                  lens which means it telescope sits on. The mount is the actual
                  tripod and the wedge is the device that lets you attach the
                  telescope to the mount. Moms are like…buttons? Moms are like
                  glue. Moms are like pizza crusts. Moms are the ones who make
                  sure things happen—from birth to school lunch.
                </p>
                <p>
                  Moms are like…buttons? Moms are like glue. Moms are like pizza
                  crusts. Moms are the ones who make sure things happen—from
                  birth to school lunch.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <h2 className="text-primary">Related Articles</h2>
            <Row className="mb-3">
              <Col xs={12} className="mb-3">
                <div className="custom-card">
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

                  {/* double card */}
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
              </Col>
              <Col xs={12}>
                <div className="card">Advertizement</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => {
  const {} = loginReducer;
  return {};
};

export default connect(mapStateToProps, {})(Article);
