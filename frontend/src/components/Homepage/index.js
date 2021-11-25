import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Card, Col } from "react-bootstrap";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={8}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Text>Name </Card.Text>
                    <Card.Title>NAme</Card.Title>
                  </Col>
                  <Col>
                    <Card.Text>National ID</Card.Text>
                    <Card.Title>National ID</Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Text>Current Permits </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {/* cards in right side */}
          <Col sm={4}>
            <Card className="right-side">
              {/* Helth state */}
              <Card.Body id="Helth-card">
                <Row>
                  <Col sm={2}>
                    <img
                      id="Helth"
                      src="https://bitcoinvalued.com/images/qr-code/qr-code-200px.png"
                    />
                  </Col>
                  <Col sm={10}>
                    {" "}
                    <Card.Title>Helth State</Card.Title>
                    <Card.Title>
                      Last Update
                    </Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="right-side">
              <Card.Body>
                <Row>
                  <Col sm={2}>
                    <img
                      id="Helth-condition"
                      src="https://i.pinimg.com/originals/18/19/a6/1819a6b062a0dad95ddb748f4a264904.png"
                    />
                  </Col>
                  <Col sm={10}>
                    {" "}
                    <Card.Title>Health Condition</Card.Title>
                    <Card.Title>Health status details and colors</Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="right-side">
              <Card.Body>
                <Row>
                  <Col sm={2}>
                    {" "}
                    <img
                      id="ScanQr"
                      src="http://cdn.onlinewebfonts.com/svg/img_366581.png"
                    />
                  </Col>
                  <Col sm={10}>
                    {" "}
                    <Card.Title>
                      Use QR Code to visit the gathering place
                    </Card.Title>{" "}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="right-side">
              <Card.Body>
                <Row>
                  <Col sm={2}>
                    <img
                      id="family"
                      src="https://cdn2.iconfinder.com/data/icons/basic-thin-line-color/21/17-512.png"
                    />
                  </Col>
                  <Col sm={10}>
                    <Card.Title>
                      Family Members and Sponsored Members
                    </Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="right-side">
              <Card.Body>
                <Row>
                  <Col sm={2}>
                    <img
                      id="Covid-19"
                      src="https://cdn.fs.teachablecdn.com/kY1VxabwTX66zOA5CRVz"
                    />
                  </Col>
                  <Col id="statix" sm={10}>
                    <Card.Title>MOH COVID-19 Dashboard</Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
