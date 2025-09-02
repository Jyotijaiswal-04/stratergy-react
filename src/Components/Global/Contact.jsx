import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextStyle1 from "./TextStyle1";
import ContactCard from "./ContactCard";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const Contact = () => {
  const data = [
    {
      Icon: CiLocationOn,
      heading: "Our Address",
      title1: "1842 Maple Avenue, Portland, Oregon 97204",
      title2: "",
    },
    {
      Icon: MdOutlineEmail,
      heading: "Email Address",
      title1: "info@example.com",
      title2: "contact@example.com",
    },
    {
      Icon: FaHeadset,
      heading: "Hours of Operation",
      title1: "Sunday-Fri: 9 AM - 6 PM",
      title2: "Saturday: 9 AM - 4 PM",
    },
  ];
  return (
    <div>
      <Container className="py-5 pb-5" style={{ marginTop: 200 }}>
        <TextStyle1 title="CONTACT" description="Let's Connect" />
        {/* <ContactCard/> */}
        <Row xs={1} md={2} lg={3} className="g-4 pt-5">
          {data.map((a, i) => (
            <Col key={i}>
              <ContactCard
                Icon={a.Icon}
                heading={a.heading}
                title1={a.title1}
                title2={a.title2}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Container fluid>
        <ContactForm />
      </Container>
    </div>
  );
};

export default Contact;
