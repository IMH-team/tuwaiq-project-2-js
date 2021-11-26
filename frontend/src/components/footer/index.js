import React from "react";

import {
  Container,
  Row,
  NavDropdown,
  Col,
  Offcanvas,
  Nav,
  Form,
  Button,
  FormControl,
  Navbar,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./footer.css";
const Footer = () => {
  return (
    <div className="App">
      <>
        <Container className="footer">
          <Row>
            <Col></Col>
            <Col xs={6}>
              <Navbar  variant="light">
                <Container id="foot">
                  <Nav className="me-auto">
                    <Nav.Link className="footer-links" href="#home">Home</Nav.Link>
                    <Nav.Link className="footer-links" href="#features">About</Nav.Link>
                    <Nav.Link className="footer-links" href="#pricing">Services</Nav.Link>
                    <Nav.Link className="footer-links" href="#home">Works</Nav.Link>
                    <Nav.Link className="footer-links" href="#features">FAQs</Nav.Link>
                    <Nav.Link className="footer-links" href="#pricing">Contact Us</Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default Footer;
