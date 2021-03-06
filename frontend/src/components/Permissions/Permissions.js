import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Permissions.css";
import Navigation from "../navigation/index";
import Footer from "../footer/index";
import cart from "./cart.png";
import car from "./car.png";
import gathering from "./gathering.png";
import medical from "./medical.png";
import sport from "./sport.png";
import help from "./help.png";
import MyPerCard from "./MyPerCard";

export default function Permissions() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/permissions");
      const data = await response.json();
      const info = data.find(
        (user) => user.userId === sessionStorage.getItem("userId")
      );
      setData(info.permission);
    })();
  }, []);

  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <Col>
            <Card className="disabledd">
              <img id="card-imageee" src={cart} alt="" />
              <div style={{ margin: "0 20px" }}>
                <h5> Supplies </h5> <h6>Request permit for supplies</h6>
              </div>
              <h5>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>{" "}
              </h5>
            </Card>{" "}
          </Col>

          <Col>
            <Card className="disabledd">
              <img id="card-imageee" src={car} alt="" />
              <div style={{ margin: "0 20px" }}>
                <h5> Temporary permit for a driver </h5>{" "}
                <h6>
                  This service is only available to work or student permit
                  holders
                </h6>
              </div>
              <h5>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>{" "}
              </h5>
            </Card>{" "}
          </Col>

          <Col>
            <Card className="disabledd">
              <img id="card-imageee" src={medical} alt="" />
              <div style={{ margin: "0 20px" }}>
                <h5> mergency Medical Permit </h5>{" "}
                <h6>This service is only for medical emergencies</h6>
              </div>
              <h5>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>{" "}
              </h5>
            </Card>{" "}
          </Col>
        </Row>
      </Container>
      {/* second row */}{" "}
      <Container>
        <Row>
          <Col>
            <Card className="disabledd">
              <img id="card-imageee" src={sport} alt="" />
              <div style={{ margin: "0 20px" }}>
                <h5> Permit to Practice Walking </h5>{" "}
                <h6>
                  This service is for jogging permit in the authorized range
                </h6>
              </div>
              <h5>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>{" "}
              </h5>
            </Card>
          </Col>

          <Col>
            <Card className="disabledd">
              <img id="card-imageee" src={help} alt="" />
              <div style={{ margin: "0 20px" }}>
                <h5> Humanitarian Cases </h5>{" "}
                <h6>ubmit a request for humanitarian case</h6>
              </div>{" "}
              <h5>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>{" "}
              </h5>
            </Card>{" "}
          </Col>

          <Col>
            <Link
              to="/Permits"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card id="last-card">
                <img id="card-imageee" src={gathering} alt="" />
                <div style={{ margin: "0 20px" }}>
                  <h5> Auto health status verification permits </h5>{" "}
                  <h6>
                    {" "}
                    This permit is intended for officials of places where there
                    is a gathering{" "}
                  </h6>{" "}
                </div>{" "}
                <h5>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>{" "}
                </h5>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
      {/* Current prims */}
      <Container>
        <Row>
          <Col>
            <Card className="permits">
              <h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>{" "}
                Current Permits
              </h6>
              {data !== null && data.length > 0 ? (
                <Row md={4}>
                  {data &&
                    data.map((elem) => {
                      console.log(elem.type);
                      return (
                        <MyPerCard
                          startDate={elem.startDate}
                          endDate={elem.endDate}
                          key={elem.type}
                          type={elem.type}
                          place={elem.place}
                          numberOfPeople={elem.numberOfPeople}
                          situation={elem.situation}
                        />
                      );
                    })}
                </Row>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <svg
                    id="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-calendar-x "
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                  </svg>{" "}
                  <div style={{ margin: "0 20px" }}>
                    <h5 style={{ color: "gray" }}> No permits exist </h5>{" "}
                  </div>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
