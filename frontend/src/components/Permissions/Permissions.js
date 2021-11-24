import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Permissions.css";
import cart from "./cart.png";
import car from "./car.png";
import gathering from "./gathering.png";
import medical from "./medical.png";
import sport from "./sport.png";
import help from "./help.png";

export default class Permissions extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h3> Permits </h3>{" "}
            </Col>{" "}
          </Row>{" "}
        </Container>
        <Container>
          <Row>
            <Col>
              <Card className="disabledd">
                 <img id="card-imageee" src={cart} alt="" />
                <div style={{margin: "0 20px"}}>
                  <h5> Supplies </h5>{" "}
                  <h6>
                  Request permit for supplies
                  </h6>
                </div>
                <span>></span>
              </Card>{" "}
            </Col>

            <Col>
              <Card className="disabledd">
               <img id="card-imageee" src={car} alt="" />
                <div style={{margin: "0 20px"}}>
                  <h5> Temporary permit for a driver </h5>{" "}
                  <h6>
                  This service is only available to work or student permit
                        holders
                  </h6>
                </div>
                <span>></span>
              </Card>{" "}
            </Col>

            <Col>
              <Card className="disabledd">
                <img id="card-imageee" src={medical} alt="" />
                <div style={{margin: "0 20px"}}>
                  <h5> mergency Medical Permit </h5>{" "}
                  <h6>
                  This service is only for medical emergencies
                  </h6>
                </div>
                <span>></span>
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
                <div style={{margin: "0 20px"}}>
                  <h5> Permit to Practice Walking </h5>{" "}
                  <h6>
                  This service is for jogging permit in the authorized
                        range
                  </h6>
                </div>
                <span>></span>
              </Card>
            </Col>

            <Col>
              <Card className="disabledd">
              <img id="card-imageee" src={help} alt="" />
                <div style={{margin: "0 20px"}}>
                  <h5> Humanitarian Cases </h5>{" "}
                  <h6>
                  ubmit a request for humanitarian case
                  </h6>
                </div>{" "}
                <span>></span>
              </Card>{" "}
            </Col>

            <Col>



              <Card id="last-card">
                <img id="card-imageee" src={gathering} alt="" />
                <div style={{margin: "0 20px"}}>
                  <h5> Auto health status verification permits </h5>{" "}
                  <h6>
                    {" "}
                    This permit is intended for officials of places where there
                    is a gathering{" "}
                  </h6>{" "}
                </div>{" "}
                <span>></span>
              </Card>


            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
