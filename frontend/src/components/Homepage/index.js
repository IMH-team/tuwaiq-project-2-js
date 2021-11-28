import React from "react";
import { Container, Row, Card, Col, Form, Button } from "react-bootstrap";
import "./homepage.css";
import axios from "axios";
import Navigation from "../navigation/index";
import Footer from "../footer/index";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [name, setName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [halthStatus, setHalthStatus] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const type = sessionStorage.getItem("isAdmin");

  // Date of User to change his health status
  const [userNationalId, setUserNationalId] = useState("");
  const [userHealthStatus, setUserHealthStatus] = useState("");
  const [userBirthDate, setUserBirthDate] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userBloodType, setUserBloodType] = useState("");

  // New health status
  const [userNewHealthStatus, setUserNewHealthStatus] = useState("");

  useEffect(() => {
    fetch("/usersData")
      .then((response) => response.json())
      .then((data) => {
        const info = data.find(
          (user) => user.userId === sessionStorage.getItem("userId")
        );
        setAllUsers(data);
        setName(info.username);
        setNationalId(info.userId);
        setHalthStatus(info.healthStatus);
      });
  }, []);

  function updateHealthStatus() {
    axios
      .put(`/changeHealth/${userNationalId}`, {
        healthStatus: userNewHealthStatus,
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err.res);
      });
  }

  return (
    <div className="App">
      <Navigation />
      <Container>
        <Row>
          <Col sm={8}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Text>Name </Card.Text>
                    <Card.Title>{name}</Card.Title>
                  </Col>
                  <Col>
                    <Card.Text>National ID</Card.Text>
                    <Card.Title>{nationalId}</Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {/* <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Text>Current Permits </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card> */}
            <Card style={{ display: type === "true" ? "block" : "none" }}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Text>Change Health State of users</Card.Text>
                  </Col>
                </Row>
                <Row xs={1} md={2}>
                  <Col>
                    <h5>Select user</h5>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => {
                        if (e.target.value !== "default") {
                          setUserNationalId(e.target.value);
                          const info = allUsers.find(
                            (user) => user.userId === e.target.value
                          );
                          setUserHealthStatus(info.healthStatus);
                          setUserBirthDate(info.birthDate);
                          setUserGender(info.gender);
                          setUserBloodType(info.bloodType);
                        } else {
                          setUserNationalId("");
                          setUserHealthStatus("");
                          setUserBirthDate("");
                          setUserGender("");
                          setUserBloodType("");
                        }
                      }}
                    >
                      <option value="default">
                        Select user To change his health state
                      </option>
                      {allUsers &&
                        allUsers.map((user) => {
                          return (
                            <option value={user.userId}>{user.username}</option>
                          );
                        })}
                    </Form.Select>
                  </Col>
                  <Col>
                    <h5>User National Id</h5>
                    <Form.Control
                      type="text"
                      placeholder={userNationalId}
                      disabled
                    />
                  </Col>
                </Row>
                <Row xs={1} md={4}>
                  <Col>
                    <h5>Birth Date</h5>
                    <Form.Control
                      type="text"
                      placeholder={userBirthDate}
                      disabled
                    />
                  </Col>
                  <Col>
                    <h5>Gender</h5>
                    <Form.Control
                      type="text"
                      placeholder={userGender}
                      disabled
                    />
                  </Col>
                  <Col>
                    <h5>Blood Type</h5>
                    <Form.Control
                      type="text"
                      placeholder={userBloodType}
                      disabled
                    />
                  </Col>
                  <Col>
                    <h5>Health Status</h5>
                    <Form.Control
                      type="text"
                      placeholder={userHealthStatus}
                      disabled
                    />
                  </Col>
                </Row>
                <Row xs={1} md={2}>
                  <Col>
                    <h5>Change health status of this user</h5>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => {
                        if (e.target.value !== "default") {
                          setUserNewHealthStatus(e.target.value);
                        } else {
                          setUserNewHealthStatus("");
                        }
                      }}
                    >
                      <option value="default">Select health state</option>
                      <option value="Immune">Immune</option>
                      <option value="Exposed">Exposed</option>
                      <option value="Infected">Infected</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row xs={1} md={2}>
                  <Col>
                    <Button
                      variant="success"
                      style={{
                        backgroundColor: "#2eafa1",
                        borderColor: "#2eafa1",
                      }}
                      onClick={() => {
                        updateHealthStatus();
                        window.location.href = "/HomePage";
                      }}
                    >
                      Save
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {/* cards in right side */}
          <Col sm={4}>
            <Card className="right-side">
              {/* Helth state */}
              <Card.Body
                id="Helth-card"
                style={{
                  backgroundImage:
                    halthStatus === "Immune"
                      ? "linear-gradient(306deg, #00431c , #006e2e)"
                      : halthStatus === "Infected"
                      ? "linear-gradient(306deg, #ad7236 , #663c10)"
                      : "linear-gradient(306deg, #fedd00 , #a38e00)",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Row>
                  <Col sm={2}>
                    <img id="Helth" src="./images/HealthState.png" alt="" />
                  </Col>
                  <Col sm={10}>
                    {" "}
                    <Card.Title>{halthStatus}</Card.Title>
                    <Card.Title>Last Update</Card.Title>
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
                      alt=""
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
                      alt=""
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
                      alt=""
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
                      alt=""
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
      <Footer />
    </div>
  );
};

export default HomePage;
