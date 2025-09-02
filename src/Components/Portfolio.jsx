import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Container, Row, Col } from "react-bootstrap";
import TextStyle1 from "./Global/TextStyle1";
import PortfolioCard from "./Global/PortfolioCard";

import pf1 from "../assets/images/pf1.webp";

import pf2 from "../assets/images/pf2.webp";
import pf3 from "../assets/images/pf3.webp";
import pf4 from "../assets/images/pf4.webp";
import pf5 from "../assets/images/pf5.webp";
import pf6 from "../assets/images/pf6.webp";
import pf7 from "../assets/images/pf7.webp";
import pf8 from "../assets/images/pf8.webp";
import classes from "../assets/styles/PortfolioCard.module.css";
const Portfolio = () => {
  const cards = [
    {
      image: pf1,
      title: "Mobile Banking App",
      category: "UI/UX Design",
    },
    {
      image: pf2,
      title: "E-Learning Platform",
      category: "Development",
    },
    {
      image: pf3,
      title: "Urban Architecture",
      category: "photography",
    },
    {
      image: pf4,
      title: "Social Media Campaign",
      category: "Marketing",
    },
    {
      image: pf5,
      title: "Smart Home Interface",
      category: "UI/UX Design",
    },
    {
      image: pf6,
      title: "Cloud Management System",
      category: "Development",
    },
    {
      image: pf7,
      title: "Nature Collection",
      category: "Photography",
    },
    {
      image: pf8,
      title: "Marketing Strategy",
      category: "BRANDING",
    },
  ];

  return (
    <div>
      <div>
        <Container className="py-5" style={{ marginTop: 210 }}>
          <TextStyle1 title="Portfolio" description="Check Our Portfolio" />
          <h3>Porfolio</h3>
          {/* <Row xs={1} sm={2} lg={2} className="g-4 pt-4 ">
            {cards.map((a, i) => (
              <Col key={i}>
                <PortfolioCard
                  image={a.image}
                  title={a.title}
                  category={a.category}
                />
              </Col>
            ))}
          </Row> */}

          <Tabs
            defaultActiveKey="allproject"
            id="fill-tab-example"
            className="mb-3 my-5 rounded-2 pb-3 m3-2   "
            fill
          >
            <Tab eventKey="allproject" title="All Project">
              {/* Tab content for Home */}
              <Row xs={1} sm={2} lg={4} className="g-4 pt-4 ">
                {cards.map((a, i) => (
                  <Col key={i}>
                    <PortfolioCard
                      image={a.image}
                      title={a.title}
                      category={a.category}
                    />
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="uiux" title="UI/UX">
              {/* Tab content for Profile */}
              <Row xs={1} sm={2} lg={4} className="g-4 pt-4">
                {cards
                  .filter(
                    (a) =>
                      a.category.toLowerCase() === "ui/ux design".toLowerCase()
                  )
                  .map((a, i) => (
                    <Col key={i}>
                      <PortfolioCard
                        image={a.image}
                        title={a.title}
                        category={a.category}
                      />
                    </Col>
                  ))}
              </Row>
            </Tab>
            <Tab eventKey="developement" title="Developement ">
              {/* Tab content for Loooonger Tab */}
              <Row xs={1} sm={2} lg={4} className="g-4 pt-4">
                {cards
                  .filter(
                    (a) =>
                      a.category.toLowerCase() == "Development".toLowerCase()
                  )
                  .map((a, i) => (
                    <Col key={i}>
                      <PortfolioCard
                        image={a.image}
                        title={a.title}
                        category={a.category}
                      />
                    </Col>
                  ))}
              </Row>
            </Tab>
            <Tab eventKey="photography" title="Photography">
              {/* Tab content for Contact */}
              <Row xs={1} sm={2} lg={4} className="g-4 pt-4">
                {cards
                  .filter(
                    (a) =>
                      a.category.toLowerCase() == "photography".toLowerCase()
                  )
                  .map((a, i) => (
                    <Col key={i}>
                      <PortfolioCard
                        image={a.image}
                        title={a.title}
                        category={a.category}
                      />
                    </Col>
                  ))}
              </Row>
            </Tab>
            <Tab eventKey="marketing" title="Marketing">
              {/* Tab content for Contact */}
              <Row xs={1} sm={2} lg={4} className="g-4 pt-4">
                {cards
                  .filter(
                    (a) => a.category.toLowerCase() == "marketing".toLowerCase()
                  )
                  .map((a, i) => (
                    <Col key={i}>
                      <PortfolioCard
                        image={a.image}
                        title={a.title}
                        category={a.category}
                      />
                    </Col>
                  ))}
              </Row>
            </Tab>
          </Tabs>
          {/* <PortfolioCard /> */}
        </Container>
      </div>
    </div>
  );
};

export default Portfolio;
