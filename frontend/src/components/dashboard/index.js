import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../navigation/index";
import Footer from "../footer/index";
import MyCard from "./MyCard";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/users");
      const data = await response.json();
      const info = data.find(
        (user) => user.userId === sessionStorage.getItem("userId")
      );

      console.log(info);
      setData(info.userInfo);
    })();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Container>
        <Row md={4}>
          {data &&
            data.map((elem) => {
              const nameWithOutUnderscore = elem.name.replaceAll("_", " ");
              return (
                <Link
                  to={`/OneInformation/${elem.name}`}
                  style={{ textDecoration: "none", color: "#42ae9f" }}
                >
                  <MyCard
                    key={elem.name}
                    title={nameWithOutUnderscore}
                    img={elem.image}
                    number={elem.data.length}
                  />
                </Link>
              );
            })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
