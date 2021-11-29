import React from "react";
import { Col, Card, Container } from "react-bootstrap";
// import "./MyCard.css";

export default function MyPerCard(props) {
  return (
    <Container>
      <Col>
        <Card
          className="myCard"
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{color: "#2eafa1"}}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
              {props.startDate}
              {/* {props.endDate} */}
            </Card.Title>
            <Card.Title>{props.type}</Card.Title>
            <Card.Text>{props.place}</Card.Text>
            <Card.Text>{props.numberOfPeople}</Card.Text>
            <Card.Text>Accepted</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}
