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

        {/* Current prims */}
        <Container>
          <Row>
            <Col>
              <Card className="permits">
<h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> Current Permits
</h6>
                
              <svg id="svg" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-calendar-x " viewBox="0 0 16 16">
  <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>                <div style={{margin: "0 20px"}}>
                  <h5 id="h5"> No permits exist </h5>{" "}
                </div>
              </Card>
            </Col>
            </Row>
            </Container>
      </div>
    );
  }
}
