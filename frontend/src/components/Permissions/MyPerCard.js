import React from "react";
import { Col, Card, Container } from "react-bootstrap";
// import "./MyCard.css";

export default function MyPerCard(props) {
  return (
    <Container>
    <Col>
      <div className="myCard" style={{ textAlign: "center",  marginLeft: "auto",
                marginRight: "auto", width: "50%"}}>
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{props.type}</Card.Title>
          <Card.Text>{props.place}</Card.Text>
          <Card.Text>{props.numberOfPeople}</Card.Text>
        </Card.Body>
      </div>
    </Col>
    </Container>
  );
}
