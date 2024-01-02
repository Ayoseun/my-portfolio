import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pix.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-section" id="about">
      <Container >
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="red"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             I am a seasoned software engineer with a diverse professional background, having successfully navigated projects across the continents of Africa, Latin America, and the USA
              <br />
              <br />My expertise extends to proficiency in six programming languages, enabling me to adapt seamlessly to a variety of technological landscapes. building with
              <i>
                <b className="red"> Python, Typescript, Dart, Rust,  Javascript, Golang, kotlin, MQ, MongoDB, Postgres, Monolithic, Microservices, AWS, GCP, Azure. </b>
              </i>
              <br />
              <br />
              As a blockchain engineer, I am deeply engaged in the transformative potential of decentralized technologies. My work in this space reflects not only technical proficiency but also a passion for contributing to the evolution of the blockchain landscape spanning across &nbsp;
              <i>
                <b className="red">EVM chain, Hyperledger and Rust powered DLTs </b> and
                also in areas related to{" "}
                <b className="red">
                  Blockchain core engineering.
                </b>
              </i>
              <br />
              <br />
              I am eager to bring my wealth of experience to new challenges and collaborate on projects that demand a holistic understanding of software engineering, distributed systems, and cutting-edge blockchain technologies. 
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-oval" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="red">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ayoseun"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/nuesoya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayosolomon/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nuesoya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
