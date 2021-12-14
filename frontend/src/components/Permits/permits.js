import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Button,
  FormGroup,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import Navigation from "../navigation/index";
import Footer from "../footer/index";
import "./Permits.css";

export default function Permits() {
  const [startDate, setStart] = useState("");
  const [endDate, setEnd] = useState("");
  const [Permits, setPermits] = useState({});
  const [type, setType] = useState("");
  const [place, setPlace] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [display, setDisplay] = useState("none");

  function savePermissions() {
    axios({
      method: "post",
      url: `/permissions/${sessionStorage.getItem("userId")}`,
      data: {
        startDate: startDate,
        endDate: endDate,
        type: type,
        place: place,
        numberOfPeople: numberOfPeople,
      },
    })
      .then((response) => {
        console.log(response);
        setPermits(response.data.id);
        console.log(Permits);
      })
      .catch((error) => {
        setDisplay("block");
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
              </Form.Group>
              <Row>
                <Alert variant="danger" style={{ display: display }}>
                  Date is wrong! please check
                </Alert>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Start Date </Form.Label>{" "}
                    <Form.Control
                      type="date"
                      onChange={(e) => {
                        setStart(e.target.value);
                        console.log(startDate);
                      }}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> End Date </Form.Label>{" "}
                    <Form.Control
                      type="date"
                      onChange={(e) => setEnd(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <FormGroup>
                <Button
                  id="Requst-botton"
                  variant="secondary"
                  style={{
                    backgroundColor: "#2EAFA1",
                    
                  }}
                  onClick={() => {
                    let a = new Date().getFullYear();
                    let b = new Date().getMonth() + 1;
                    let c = new Date().getDate();
                    let day = startDate.split("-");
                    let year = parseInt(day[0]);
                    let month = parseInt(day[1])
                    let dayyy = parseInt(day[2])
                    // console.log(typeof day1);


                    if (startDate > endDate) {
                      return setDisplay("block");
                    } else if (year < a || month < b || dayyy < c) {
                      return setDisplay("block");
                    }
                    savePermissions();
                    window.location.href = "/Permissions";
                  }}
                >
                  Request Permit{" "}
                </Button>
              </FormGroup>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
