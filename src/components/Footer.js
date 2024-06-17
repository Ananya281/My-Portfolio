import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><FaLinkedinIn className="icon"/></a>
              <a href="#"><SiGithub className="icon" /></a>
              <a href="#"><SiLeetcode className="icon" /></a>
            </div>
            <br/>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}