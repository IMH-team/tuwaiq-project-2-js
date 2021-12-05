import React, { useState, useEffect } from "react";
import "./navigation.css";
import {
  Container,
  Row,
  Col,
  Offcanvas,
  Nav,
  Navbar,
  Card,
  Dropdown,
} from "react-bootstrap";
import { BsBell } from "react-icons/bs";

const Navigation = () => {
  const [display, setDisplay] = useState("none");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const notifications = JSON.parse(localStorage.getItem("notifications"));
    if (notifications !== null) {
      const userNotifications = notifications.filter(
        (notifications) =>
          notifications.userId === sessionStorage.getItem("userId") &&
          notifications.isReading === false
      );
      setNotifications(userNotifications);
    }
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <Navbar expand={false}>
            <Col sm>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/HomePage">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-house-door-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                      </svg>
                      Home
                    </Nav.Link>
                    <Nav.Link href="/Permissions">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-stopwatch-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z" />
                      </svg>
                      Permits
                    </Nav.Link>
                    <Nav.Link href="#action2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                      Reports
                    </Nav.Link>
                    <Nav.Link href="#action2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-bell-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                      </svg>
                      Notifcations
                    </Nav.Link>
                    <Nav.Link href="/Dashboard">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-menu-up"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z" />
                      </svg>
                      Dashbord
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <Navbar.Brand href="#">
                <img
                  src="https://tawakkalna.sdaia.gov.sa/assets/img/illustrations/twlogo.png"
                  alt=""
                />
              </Navbar.Brand>
            </Col>
            <Col sm></Col>
            <Col sm></Col>
            <Col sm></Col>
            <Col sm></Col>
            <Col sm>
              <Row>
                <Col>
                  <BsBell
                    className="Bell"
                    onClick={() => {
                      if (display === "none") {
                        setDisplay("block");
                      } else {
                        setDisplay("none");
                      }
                    }}
                  />
                  <span className="Num-alert">
                    {notifications && notifications.length}
                  </span>
                </Col>
                <Col>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      My Profile
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/Profile">My profile</Dropdown.Item>
                      <Dropdown.Item href="/SignIn">Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Col>
          </Navbar>
        </Row>
        <Card
          style={{
            width: "20%",
            position: "absolute",
            zIndex: "99",
            right: "144px",
            top: "60px",
            display: display,
          }}
        >
          {notifications &&
            notifications.map((elem) => (
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Text>{elem.description}</Card.Text>
              </Card.Body>
            ))}
        </Card>
      </Container>
    </div>
  );
};

export default Navigation;
