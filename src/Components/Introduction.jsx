import { Container, Row, Col } from "react-bootstrap";
import classes from "../assets/styles/Introduction.module.css";
import introImg from "../assets/images/introImg.webp";
import { MdArrowOutward } from "react-icons/md";
import Button2 from "./Global/Button2";
import AboutUs from "./AboutUs";
import Steps from "./Global/Steps";

const Introduction = () => {
  return (
    <div>
      <Container className={classes.main}>
        <Row>
          <Col sm={12} lg={7}>
            <div className="introText">
              <p className="p1">OUR AGENCY</p>
              <h1 className="heading1">CREATIVE DESIGN</h1>
              <hr className="hr" />
              <p>
                Discover innovative strategies for impactful visual
                communication. We transform ideas into compelling realities,
                ensuring your brand stands out in a crowded marketplace. Our
                dedicated team leverages cutting-edge techniques to deliver
                exceptional results that resonate with your audience.
              </p>
              <div className="pt-1">
                <Button2 />
              </div>
            </div>
          </Col>
          <Col sm={12} lg={5}>
            <div className="introImage">
              <img
                src={introImg}
                className={classes.introImg}
                alt="introimage"
              />
            </div>
            <div className={classes.introMain}>
              <div className={classes.wrap1}>
                <p className={classes.p1}>5k</p>
                <div className={classes.icon}>
                  <MdArrowOutward />
                </div>
              </div>
              <div>
                <p className={classes.p2}>successful compaigns</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <AboutUs />
      <Steps />
    </div>
  );
};
export default Introduction;
