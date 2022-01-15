import React from "react";
import "./Banner.css";
import { Container, Col, Row } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";

const Banner = () => {
  return (
    <div className='banner-container'>
      <Container className='contain'>
        <Row>
          <Col>
            <div className='d-flex flex-column justify-content-between'>
              <Col className='text'>
                <hr className='line'></hr>
                Hello,I'm Ali &#128075;
              </Col>
              <Col className='content'>
                <span className='text-discrip'>Father,</span>
                <span className='text-discrip'>who love</span>
                <span className='text-discrip'>Design</span>
              </Col>
              <Col className='text-uppercase'>
                <span className='details-text'>view details</span>
                <span className='circle'></span>
              </Col>
            </div>
          </Col>
          <Col>
            <div className='my-photo'>
              <div className='photo-circle'></div>
              <img src='./coder-icon-26.jpg' alt='' />
            </div>
            <div className='contact-me'>
              <span className='contact-text'>Contact Me</span>
              <AiOutlineMail className='mail-icon' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
