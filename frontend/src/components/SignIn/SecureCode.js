import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Card, Col, Alert } from "react-bootstrap";
import axios from "axios";
import "./signin.css";

const SecureCode = () => {
  const code = window.sessionStorage.getItem("secureCode");
  const [secureCode, setSecureCode] = useState(0);
  const [display, setDisplay] = useState("none");

  return (
    <div className="App">
      <Container style={{ textAlign: "center" }}>
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
                    <Alert variant="danger" style={{ display: display }}>
                      Please enter correct verification code
                    </Alert>
                    <Card.Title>Verification code</Card.Title>
                    <Card.Title>{code}</Card.Title>
                  </Col>
                </Row>
                <Card.Text>
                  <input
                    className="inputsToLogIn"
                    type="text"
                    name="NationalId"
                    placeholder="Verification code"
                    onChange={(e) => {
                      setSecureCode(e.target.value);
                    }}
                  />
                </Card.Text>
                <Button
                  id="login"
                  variant="success"
                  onClick={() => {
                    if (secureCode === code) {
                      window.location.href = "/";
                      setDisplay("none");
                    } else {
                      setDisplay("Block");
                    }
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

export default SecureCode;
