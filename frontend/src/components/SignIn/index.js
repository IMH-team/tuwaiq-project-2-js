import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Card, Col } from "react-bootstrap";
import "./signin.css";
import axios from 'axios';
import { useState } from "react";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [nationalId, setNationalId] = useState("");
// console.log(nationalId);
  function getLoginData() {
    axios
      .post("/logIn", {
        userId: nationalId,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data !== undefined) {
          sessionStorage.setItem("userId", res.data.userId);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err.res);
      });
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <img
              id="twakklna-logo"
              src="https://tawakkalna.sdaia.gov.sa/assets/img/illustrations/twlogo.png"
            />
          </Col>
          <Col sm={4}></Col>
        </Row>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Card className="Signin">
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Login</Card.Title>
                  </Col>
                  <Col id="signUp">
                    <Link to="" className="colorLink">
                      Sign up
                    </Link>
                  </Col>
                </Row>
                <Card.Text>
                  <input
                    className="inputsToLogIn"
                    type="text"
                    name="NationalId"
                    placeholder="   National-ID/Iqama"
                    onChange={(e) => setNationalId(e.target.value)}
                    
                  />
                  <input
                    className="inputsToLogIn"
                    type="password"
                    name="password"
                    placeholder="   Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Card.Text>
                <Row id="rememebrme">
                  <Col>
                    <input type="checkbox" /> remember me
                  </Col>
                  <Col id="signUp">
                    <Link to="" className="colorLink">
                      Forget password
                    </Link>
                  </Col>
                </Row>
                <Button onClick={getLoginData} id="login" variant="success">
                  Next
                </Button>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
