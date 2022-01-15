import React from "react";
import "./Main.css";
import { Container, Col, Row } from "react-bootstrap";
import { BiBasketball } from "react-icons/bi";
import { BsArrowDownRight } from "react-icons/bs";
import Projects from "./../Projects/Projects";
import Projects_Data from "./../../Data/data";

const Main = () => {
  return (
    <Container className='main-container'>
      <Row className='mx-0' id='about'>
        <Col xs={6} md={3} className='px-0'>
          <div className='four-circle mt-circle mx-auto'>
            <span className='circle-numbers'>12+</span>
            <span className='circle-text'>
              years & counting of quality design
            </span>
          </div>
        </Col>
        <Col xs={6} md={3} className='px-0'>
          <div className='four-circle mx-auto'>
            <span className='circle-numbers'>16</span>
            <span className='circle-text '>
              Successfully lunched project last mounth
            </span>
          </div>
        </Col>
        <Col xs={6} md={3} className='px-0'>
          <div className='four-circle mt-circle mx-auto'>
            <span className='circle-numbers'>10K+</span>
            <span className='circle-text '>
              number of businesses helped to date
            </span>
          </div>
        </Col>
        <Col xs={6} md={3} className='px-0'>
          <div className='four-circle mx-auto'>
            <span className='circle-numbers'>4.8</span>
            <span className='circle-text'>
              the rating we have recieved so far
            </span>
          </div>
        </Col>
      </Row>
      <Row className='mx-0 about-container'>
        <Col xs={12} sm={6} className='px-0 mobile-height-portfolio'>
          <div className='portfolio'>
            <div>
              <span className='portfolio-text'>portfolio</span>
              <span className='portfolio-icon'>
                <BiBasketball />
              </span>
            </div>
          </div>
          <div className='last-projects'>
            <span className='last-projects-text'>
              view last <span className='fw-bold'>projects</span>
            </span>
            <span className='last-projects-icon'>
              <a href='#projects'>
                <BsArrowDownRight />
              </a>
            </span>
          </div>
        </Col>
        <Col xs={12} sm={6} className='px-0'>
          <div className='about-me'>
            <p>React front Web developer</p>
            <p className='about-me-explain'>
              developer based in Iran 1+ years of experience across web
              front-end developing with react.js library - leading the design of
              digital producsts and creating amazing user experience
            </p>
            <p className='about-me-contact'>
              contact{" "}
              <span className='about-me-me'>
                Me
                <span></span>
              </span>
            </p>
          </div>
        </Col>
      </Row>
      <div
        id='projects'
        className='d-flex justify-content-start align-items-center flex-wrap mb-5'>
        {Projects_Data.map((item) => (
          <Projects key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Main;
