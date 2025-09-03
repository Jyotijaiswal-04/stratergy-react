import { Container, Row, Col } from "react-bootstrap";
import TextStyle1 from "./Global/TextStyle1";
import aboutImg from "../assets/images/aboutImg.webp";
import { FaCheckCircle } from "react-icons/fa";
import classes from "../assets/styles/AboutUs.module.css";
import { FaLightbulb } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <Container className={`${classes.container}`}>
      <TextStyle1 title="About" description="Learn More About Us" />
      <Row className="pt-5">
        <Col xs={12} lg={6}>
          <div className={classes.img1}>
            <img src={aboutImg} alt="img" className="img-fluid" />
          </div>
          <div className={classes.text1}>
            <h1 className="fw-bold">20+</h1>
            <p>YEAR OF EXPERTISE</p>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <div className=" py-5 px-2 ">
            <h1 className={classes.h1}>
              Elevating Business Performance Through Innovation
            </h1>
            <p className="text-secondary pt-2">
              We focus on crafting bespoke strategies that navigate complexity
              and deliver tangible results for our clients.
            </p>
            <p className="pb-3">
              Through a blend of sophisticated analytics and creative
              problem-solving, we empower organizations to thrive in rapidly
              evolving markets.
            </p>
            <Row>
              <Col xs={12} lg={6}>
                <div className={classes.main}>
                  <FaCheckCircle className="text-warning h4 pb-1 " />
                  <h5>Dedicated Team Support</h5>
                  <p className={classes.p1}>
                    Our highly skilled professionals are committed to providing
                    personalized service and impactful solutions on every
                    engagement.
                  </p>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className={classes.main}>
                  <FaLightbulb className="text-warning h4 pb-1" />
                  <h5>Forward-Thinking Approach</h5>
                  <p className={classes.p1}>
                    We embrace innovative methodologies to develop unique
                    strategies that drive lasting success.
                  </p>
                </div>
              </Col>
            </Row>
            <button className="btn btn-warning text-light px-4 mt-4 rounded-pill fw-bold">
              Explore Our Services
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
