import React from 'react';
import { Link } from "react-router-dom";
import {Button, Container, Row, Card, Col } from "react-bootstrap";
import "./sign-up.css"
const SignUp = () => {
	return <div className="App">
        
        <Container>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4}><img id="twakklna-logo" src="https://tawakkalna.sdaia.gov.sa/assets/img/illustrations/twlogo.png"/></Col>
            <Col sm={4}></Col>
          </Row>
  <Row>
    <Col sm={4}></Col>
    <Col sm={4}>
    <Card className="Signin">
  <Card.Body>
  <Row>
    <Col><Card.Title>SignUp</Card.Title></Col>
    <Col id="signUp"><Link to="/SignIn" className="colorLink">Sign in</Link></Col>
  </Row>
    
   
    <Card.Text>
     <input className="inputsToLogIn" type="text" name="NationalId" placeholder="   National-ID/Iqama"/>
     <input className="inputsToLogIn" type="email" name="NationalId" placeholder="   email"/>
     <input className="inputsToLogIn" type="password" name="password" placeholder="   Password"/>
     <input className="inputsToLogIn" type="password" name="password" placeholder="   Confirm Password"/>
    </Card.Text>
    <Row id="rememebrme">
    <Col>
   <input type="checkbox"/> remember me
    </Col>
    <Col id="signUp"><Link to="" className="colorLink">Forget password</Link></Col>
  </Row>
    <Link to="/SignIn"><Button id="login" variant="success">Next</Button></Link>{' '}
 
  </Card.Body>
</Card>
    </Col>
    <Col sm={4}></Col>
  </Row>
</Container>
    </div>;
};

export default SignUp;
