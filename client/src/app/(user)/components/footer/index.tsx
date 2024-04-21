// Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Index = () => {
  return (
   
    <footer className="footer"> 
      <Container className="footer-container">
        <Row>
          <Col >
            <div className="footerContent"> 
              <h3>Company Name</h3>
              <p>123 Street Name, City, Country</p>
              <p>Phone: +123 456 789</p>
              <p>Email: info@company.com</p>
            </div>
          </Col>
          <Col >
            <div className="footerContent"> 
              <h3>Quick Links</h3>
              <ul className="list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </Col>
          <Col >
            <div className="footerContent"> 
              <h3>Follow Us</h3>
              <ul className="list-unstyled socialIcons">              
                <li><a href="#"><FaFacebook color="blue" className="ic" /></a></li>
                <li><a href="#"> <FaTwitter color="blue" className="ic" /></a></li>
                <li><a href="#"><FaInstagram color="blue" className="ic" /></a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyRight"> 
        <Container>
          <Row>
            <Col>
              <p>&copy; {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Index;
