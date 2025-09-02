import { Container, Row, Col } from "react-bootstrap";
import TextStyle1 from "./Global/TextStyle1";
import { IoArrowForward } from "react-icons/io5";
import classes from "../assets/styles/Services.module.css";
import { IoDiamondOutline } from "react-icons/io5";
import React from "react";
import { BiPalette } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { MdOutlineCameraAlt } from "react-icons/md";
import Cards1 from "./Global/Cards1";
import Steps from "./Global/Steps";
import CTA from "./Global/CTA";

const Services = () => {
  const data = [
    {
      heading: "Creative branding",
      description:
        "Nulla facilisi. Maecenas eget magna neque. Suspendisse potenti. Curabitur eleifend nisi non magna vulputate, vel condimentum libero tempus. Proin consectetur feugiat diam.",
      Icon: BiPalette,
    },
    {
      heading: "Design System",
      description:
        "Nulla facilisi. Maecenas eget magna neque. Suspendisse potenti. Curabitur eleifend nisi non magna vulputate, vel condimentum libero tempus. Proin consectetur feugiat diam.",
      Icon: IoDiamondOutline,
    },
    {
      heading: "Marketing Strategy",
      description:
        "Nulla facilisi. Maecenas eget magna neque. Suspendisse potenti. Curabitur eleifend nisi non magna vulputate, vel condimentum libero tempus. Proin consectetur feugiat diam.",
      Icon: BsMegaphone,
    },
    {
      heading: "Degital Plateform",
      description:
        "Nulla facilisi. Maecenas eget magna neque. Suspendisse potenti. Curabitur eleifend nisi non magna vulputate, vel condimentum libero tempus. Proin consectetur feugiat diam.",
      Icon: FaCode,
    },
    {
      heading: "Growth Accelaretion",
      description:
        "Nulla facilisi. Maecenas eget magna neque. Suspendisse potenti. Curabitur eleifend nisi non magna vulputate, vel condimentum libero tempus. Proin consectetur feugiat diam.",
      Icon: GoGraph,
    },
    {
      heading: "Media Solution",
      description:
        "Nulla facilisi. Maecenas eget magna neque. Suspendisse potenti. Curabitur eleifend nisi non magna vulputate, vel condimentum libero tempus. Proin consectetur feugiat diam.",
      Icon: MdOutlineCameraAlt,
    },
  ];
  return (
    <div>
      <Container className="py-5" style={{ marginTop: 200 }}>
        <TextStyle1 title="Services" description="Check Our Services" />
        <Row>
          <Col sx={12} lg={8}>
            <div className="mt-5">
              <h1>Innovative business</h1>
              <h1 className="text-warning">performance solutions</h1>
            </div>
          </Col>
          <Col sx={12} lg={4}>
            <div className="mt-5">
              <p>
                We integrate forward-thinking strategies, creative approaches,
                and state-of-the-art technologies to deliver exceptional
                customer experiences that drive growth and engage target
                markets.
              </p>
              <button className={classes.btn2}>
                <span className={classes.text}>VIEW ALL SERVICES</span>
                <span className={classes.icon}>
                  <IoArrowForward />
                </span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row xs={1} md={2} lg={3} className="g-4 pt-4">
          {data.map((a, i) => (
            <Col key={i}>
              <Cards1
                heading={a.heading}
                description={a.description}
                Icon={a.Icon}
              />
            </Col>
          ))}
        </Row>
        <Steps />
      </Container>
      <Container fluid className="py-2">
        <CTA />
      </Container>
    </div>
  );
};

export default Services;
