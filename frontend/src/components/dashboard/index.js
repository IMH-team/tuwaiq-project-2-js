import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyCard from "./MyCard";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/users");
      const data = await response.json();
      const info = data.find((user) => user.userId === "1010101010");
      setData(info.userInfo);
    })();
  }, []);

  return (
    <div className="App">
      <Container>
        <Row md={4}>
          {data &&
            data.map((elem) => {
              return (
                <Link
                  to={elem.name}
                  style={{ textDecoration: "none", color: "#42ae9f" }}
                >
                  <MyCard
                    key={elem.name}
                    title={elem.name}
                    img={elem.image}
                    number={elem.data.length}
                  />
                </Link>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
