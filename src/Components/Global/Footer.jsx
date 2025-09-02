import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import classes from '../../assets/styles/Footer.module.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <Container className={classes.mainbox} >
        <Row  >
          <Col lg={6}>
          <div className={classes.main}>
            <h1>Strategy</h1>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className={classes.iconbox}>
              <div className={classes.icon}>< FaXTwitter/></div>
              <div className={classes.icon}><FaFacebook/></div>
              <div className={classes.icon}><FaInstagram/></div>
              <div className={classes.icon}><FaLinkedinIn/></div>

            </div>
            
            </div>
            </Col>
          <Col  lg={2}>
          <div className={classes.box2}>
          <h6>Useful Links</h6>
          {/* <Link className={classes.a}><p>Home</p></Link> */}
          <ul className={classes.ul}>
            <li><Link className={classes.a}>Home</Link></li>
            <li><Link className={classes.a}>About</Link></li>
            <li><Link className={classes.a}>Contact</Link></li>
            <li><Link className={classes.a}>Services</Link></li>
            <li><Link className={classes.a}>Tearm of services</Link></li>
            <li><Link className={classes.a}>Privacy policy</Link></li>
          </ul>

            </div>
            </Col>
          <Col lg={2}>
          <div>
            <h6>Our Services</h6>
            <ul className={classes.ul}>
                <li><Link className={classes.a}>Web Design</Link></li>
                <li><Link className={classes.a}>Web Developement</Link></li>
                <li><Link className={classes.a}>Product Management</Link></li>
                <li><Link className={classes.a}>Marketing</Link></li>
                <li><Link className={classes.a}>Graphic Design</Link></li>
            </ul>
            </div>
            </Col>
          <Col lg={2}>
          <div className={classes.box3}>
            <h6>Contact Us</h6>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>United States</p>
            <p>Phone: +1 5589 55488 55</p>
            <p>Phone: +1 5589 55488 55</p>
            </div>
            </Col>
        </Row>
        <div className={classes.copyright}>
          <p>© Copyright Strategy All Rights Reserved</p>
          <p>Designed by <span>BootstrapMade</span></p>

        </div>

        </Container>
      
    </div>
  )
}

export default Footer
