import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import classes from "../../assets/styles/Header.module.css";
import Button1 from "./Button1";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    // { name: "Pricing", href: "/pricing" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div>
      <Container>
        <Navbar expand="lg" className={`${classes.Navbar} fixed-top`}>
          <Container className="text-light">
            <Navbar.Brand href="/" className={classes.brand}>
              STRATEGY
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="m-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {navLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.href}
                    className={`${classes.a} `}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </Nav>
              <div className="d-flex">
                <Button1 />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
