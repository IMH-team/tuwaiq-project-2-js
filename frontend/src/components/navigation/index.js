import React from "react";
import { Link } from "react-router-dom";
import { Container, Row , NavDropdown, Col,Offcanvas	 } from "react-bootstrap";
import './navigation.css'

const Navigation = () => {
  return (
    <div className="App">
      <Container>
        <Row>
         
		 <Col><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/%D8%AA%D9%88%D9%83%D9%84%D9%86%D8%A7.svg/1200px-%D8%AA%D9%88%D9%83%D9%84%D9%86%D8%A7.svg.png"/></Col>

          <Col className="DropDown">
			 <NavDropdown className="NavDropdown" title="MyProfile" id="basic-nav-dropdown">
				<NavDropdown.Item href="#action/3.1" className="NavDropdown.Item">Profile</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.3">Sign out</NavDropdown.Item>
        	</NavDropdown>
		</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navigation;
