import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../../assets/styles/Cta.module.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import cta from "../../assets/images/cta.webp";

const CTA = () => {
  return (
    <div className={classes.mainbox}>
      <Container>
        <Row>
          <Col xs={12} lg={8}>
            <div className={classes.main}>
              <span className={classes.badge}>DON'T MISS!</span>
              <h4 className={classes.h4}>
                Revolutionize Your Digital Experience Today
              </h4>
              <p className={classes.p1}>
                Strategia accelerates your business growth through innovative
                solutions and cutting-edge technology. Join thousands of
                satisfied customers who have transformed their operations.
              </p>
              <div className={classes.iconBox}>
                <div className={classes.icon}>
                  <div className={classes.i1}>
                    <IoIosCheckmarkCircle />
                  </div>
                  <span>Premium Support</span>
                </div>
                <div className={classes.icon}>
                  <div className={classes.i1}>
                    <IoIosCheckmarkCircle />
                  </div>
                  <span>Premium Support</span>
                </div>
                <div className={classes.icon}>
                  <div className={classes.i1}>
                    <IoIosCheckmarkCircle />
                  </div>
                  <span>Premium Support</span>
                </div>
              </div>
              <div className="d-flex gap-4">
                <a href="#" className="btn btn-warning rounded-3 text-white">
                  Start Free Trail
                </a>
                <a
                  href="#"
                  className="btn btn-outline-warning rounded-3 text-warning"
                >
                  Learn More
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className={classes.main}>
              <img src={cta} alt="img" className="img-fluid rounded-4 mb-5" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CTA;
