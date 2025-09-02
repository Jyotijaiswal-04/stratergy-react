import React from "react";
import TeamCard from "./TeamCard";
import { Container } from "react-bootstrap";
import TextStyle1 from "./TextStyle1";
import { Row, Col } from "react-bootstrap";
import img1 from "../../assets/images/team1.webp";
import img2 from "../../assets/images/team2.webp";
import img3 from "../../assets/images/team3.webp";
import img4 from "../../assets/images/team4.webp";
import img5 from "../../assets/images/team5.webp";
import img6 from "../../assets/images/team6.webp";
import Pricing from "./Pricing";
import Faq from "./Faq";

const Team = () => {
  const data = [
    {
      // src:"STRATEGY/src/assets/images/team1.webp",
      src: img1,
      heading: "Walter White",
      title: "Chief Executive Officer",
      description:
        "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
    },
    {
      src: img2,
      heading: "Sarah Jhonson",
      title: "Product Manager",
      description:
        "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
    },
    {
      src: img3,
      heading: "William Anderson",
      title: "CTO",
      description:
        "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
    },
    {
      src: img4,
      heading: "Amanda Jepson",
      title: "CTO",
      description:
        "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
    },
    {
      src: img5,
      heading: "Brian Doe",
      title: "CTO",
      description:
        "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
    },
    {
      src: img6,
      heading: "Josepha Palas",
      title: "CTO",
      description:
        "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
    },
  ];
  return (
    <Container className="py-5" style={{ marginTop: 200 }}>
      <TextStyle1 title="TEAM" description="Check Our Team" />
      {/* <Row xs={1} md={1} lg={2} className="g-4 pt-4" >
        <Col><TeamCard/></Col>
        <Col><TeamCard/></Col>
        </Row> */}
      <Row xs={1} sm={1} lg={2} className="g-4 pt-4 ">
        {data.map((a, i) => (
          <Col key={i}>
            <TeamCard
              src={a.src}
              heading={a.heading}
              title={a.title}
              description={a.description}
            />
          </Col>
        ))}
      </Row>
      <Pricing />
      <Faq />
    </Container>
  );
};

export default Team;
