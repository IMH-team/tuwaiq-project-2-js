import React from "react";
import "./profile.css";
import Navigation from "../navigation/index";
import Footer from "../footer/index";
import { useState, useEffect } from "react";

import { Container, Row, Card, Col, Button } from "react-bootstrap";
const Profile = () => {

  const [name, setName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [gender, setgender] = useState("");
  const [bloodType, setbloodType] = useState("");
  useEffect(() => {
    fetch("/logIn")
      .then((response) => response.json())
      .then((data) => {
        const info = data.find((user) => user.userId === "0000000000");
        // console.log(info.username);
        setName(info.username);
        setNationalId(info.userId);
        setbirthDate(info.birthDate);
        setgender(info.gender);
        setbloodType(info.bloodType);
      });
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Container>
        <Row id="profile">
          <Col sm={11}>
            <Card id="MyProfile">
              <Card.Body>
                <Row>
                  <Card.Title>My Profile </Card.Title>
                  <Row>
                    {" "}
                    <Card.Text  id="personal">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      Personal information
                    </Card.Text>
                  </Row>
                  <Col sm={4}>
                    <Card.Text>Name</Card.Text>
                    <Card.Text className="text-color">{name}</Card.Text>
                  </Col>
                  <Col sm={2}>
                    <Card.Text>National ID</Card.Text>
                    <Card.Text className="text-color">{nationalId}</Card.Text>
                  </Col>
                  <Col sm={2}>
                    <Card.Text>Birthdate</Card.Text>
                    <Card.Text className="text-color">{birthDate}</Card.Text>
                  </Col>
                  <Col sm={2}>
                    <Card.Text>Gender</Card.Text>
                    <Card.Text className="text-color">{gender}</Card.Text>
                  </Col>
                  <Col sm={2}>
                    <Card.Text>Blood Type</Card.Text>
                    <Card.Text className="text-color">{bloodType}</Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row >
                  <Card.Text id="personal">
                    <svg
                      id="logo-members"
                      class="svg-inline--fa fa-users fa-w-20 fs-3 text-secondary text-400"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="users"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                      ></path>
                    </svg>
                    Family and Sponsored Members
                  </Card.Text>

                  <Col sm={12} id="members">
                    <svg
                      id="icons"
                      class="svg-inline--fa fa-users fa-w-20 fs-3 text-secondary text-400"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="users"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                      ></path>
                    </svg>
                    <h5>There are no members</h5>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Row >
                    {" "}
                    <Card.Text id="personal">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-lock-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                      </svg>
                      Change Password
                    </Card.Text>
                    <Col>
                      <label>New Password</label>
                    </Col>
                    <Row>
                      <Col>
                        <input
                          id="ChangePass"
                          className="inputsToLogIn"
                          type="password"
                          name="password"
                          placeholder="   Change Password"
                        />
                      </Col>
                      <Row>
                        <Col>
                          <Button id="Save" variant="primary">
                            Save
                          </Button>{" "}
                        </Col>
                      </Row>
                    </Row>
                  </Row>
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

export default Profile;
