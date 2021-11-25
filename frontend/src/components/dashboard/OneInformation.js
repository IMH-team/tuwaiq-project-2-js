import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Card, Col } from "react-bootstrap";
import Navigation from "../navigation/index";
import Footer from "../footer/index";
import "./OneInformation.css";

export default function OneInformation() {
  const params = useParams();
  const name = params.name;
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/users");
      const data = await response.json();
      const info = data.find((user) => user.userId === "1010101010");
      const oneInfo = info.userInfo.find((oneInfo) => oneInfo.name === name);
      setData(oneInfo.data);
    })();
  }, []);

  return (
    <>
      <Navigation />
      <Container className="myContainer">
        <Row md={3}>
          <Col>
            {data &&
              data.map((elem) => {
                console.log(name);
                if (name === "Driving_Licenses") {
                  return (
                    <Card className="myCard">
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Text>
                          <Row>
                            <Col>License type</Col>
                            <Col>{elem.type}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col>License status</Col>
                            <Col>{elem.state}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col>Issuing date</Col>
                            <Col>{elem.releaseDate}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col>Expiry Date</Col>
                            <Col>{elem.expiryDate}</Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                } else if (name === "National_Address") {
                  return (
                    <Card className="myCard">
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Text>
                          <Row>
                            <Col>Building Number</Col>
                            <Col>{elem.buildingNumber}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col>Postal Code</Col>
                            <Col>{elem.postalCode}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col>Additional Code</Col>
                            <Col>{elem.additionalCode}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col>Unit Number</Col>
                            <Col>{elem.unitNumber}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col>Short Title</Col>
                            <Col>{elem.shortTitle}</Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                } else {
                  return (
                    <Card className="myCard">
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Text>
                          <Row>
                            <Col>Building Number</Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                }
              })}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
