import React from "react";
import { Col, Card } from "react-bootstrap";
import "./MyCard.css";

export default function MyCard(props) {
  return (
    <Col>
      <Card className="myCard">
        <Card.Body style={{ textAlign: "center" }}>
          <img src={props.img} alt={props.title} />
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.number}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
