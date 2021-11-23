import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MyCard from "./MyCard";

function getData() {
  fetch("/users")
    .then((res) => res.json())
    .then((data) => {
      const info = data.find((user) => user.userId === "1010101010");
      console.log(info.userInfo);
    })
    .catch();
}

const Dashboard = () => {
  return (
    <div className="App">
      <Container>
        <Row md={4}>
          <Button onClick={getData}></Button>
          <MyCard />
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
