import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Button,
  FormGroup,
} from "react-bootstrap";
import axios from "axios";
import Navigation from "../navigation/index";
import Footer from "../footer/index";
import "./Permits.css";

export default function Permits() {
  const [Permits, setPermits] = useState({});
  const [type, setType] = useState("");
  const [place, setPlace] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    // console.log(type, place, numberOfPeople);
    axios({
      method: "post",
      url: "/permissions/1111111111",
      data: {
        type: type,
        place: place,
        numberOfPeople: numberOfPeople,
      },
    })
      .then((response) => {
        // code for if the request succeeds
        console.log(response);
        setPermits(response.data.id);
        console.log(Permits);
      })
      .catch((error) => {
        // code for if the request fails
        console.log(error);
      });
  }

  return (
    <div>
      <Navigation />
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col>
            <Card id="permits-card-body">
              <h5> Permit type </h5>{" "}
              <Form onSubmit={handleClick}>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Governmental"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      onClick={() => setType("Governmental")}
                    />
                    <Form.Check
                      inline
                      label="Commercial"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      onClick={() => setType("Commercial")}
                    />
                    <Form.Check
                      inline
                      label="Personal"
                      type={type}
                      id={`inline-${type}-3`}
                      // onChange = {setType("Personal")}
                      onClick={() => setType("Personal")}
                    />
                  </div>
                ))}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label> Place Name </Form.Label>{" "}
                  <Form.Control
                    type="text"
                    placeholder="Place name"
                    onChange={(e) => setPlace(e.target.value)}
                  />
                </Form.Group>{" "}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label> Number of expected Visitors </Form.Label>{" "}
                  <Form.Control
                    type="text"
                    placeholder="Number of expected Visitors"
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                  />
                </Form.Group>{" "}
                <FormGroup>
                  <Button
                    variant="secondary"
                    style={{
                      backgroundColor: "#2EAFA1",
                      width: "25%",
                    }}
                    type="submit"
                  >
                    Request Permit{" "}
                  </Button>
                </FormGroup>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
