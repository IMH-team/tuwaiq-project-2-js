import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Card, Col, Alert } from "react-bootstrap";
import axios from "axios";
import "./signin.css";

const SignIn = () => {
  const [NationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("none");

  function getLoginData() {
    axios
      .post("/logIn", {
        userId: NationalId,
        password: password,
      })
      .then((res) => {
        if (res.data !== undefined) {
          sessionStorage.setItem(
            "secureCode",
            Math.floor(1000 + Math.random() * 9000)
          );
          sessionStorage.setItem("isAdmin", res.data.isAdmin);
          sessionStorage.setItem("userId", res.data.userId);
          window.location.href = "/SecureCode";
        }
      })
      .catch((err) => {
        setDisplay("Block");
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
              alt=""
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
                <Alert variant="danger" style={{ display: display }}>
                  National ID or Password incorrect !!
                </Alert>
                <Card.Text>
                  <input
                    className="inputsToLogIn"
                    type="text"
                    name="NationalId"
                    placeholder="   National-ID/Iqama"
                    onChange={(e) => {
                      setNationalId(e.target.value);
                    }}
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
                <Button
                  id="login"
                  variant="success"
                  onClick={() => {
                    getLoginData();
                  }}
                >
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
