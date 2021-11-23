import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Card, Col } from "react-bootstrap";

export default function OneInformation() {
  const params = useParams();
  const name = params.name;
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/users");
      const data = await response.json();
      const info = data.find((user) => user.userId === "1010101010");
      const oneInfo = info.userInfo.find((oneInfo) => oneInfo.name === name);
      //   console.log(oneInfo.data);
      setData(oneInfo.data);
    })();
  }, []);

  return (
    <Container>
      <Row md={4}>
        <Col>
          {data &&
            data.map((d) => {
              console.log(d.type);
              <Card>
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>{d.type}</Card.Title>
                </Card.Body>
              </Card>;
            })}
        </Col>
      </Row>
    </Container>
  );
}
