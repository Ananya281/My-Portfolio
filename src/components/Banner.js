import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import spaceVideo from "../assets/video/space.mp4"; // Import video from assets folder

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner py-5" id="home">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="video-background">
        <source src={spaceVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Black Overlay */}
      <div className="overlay"></div>

      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="text-center text-md-start">
            <div>
              <span className="tagline mb-3 d-block">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Ananya`}
                <br />
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p className="mt-4 text-white opacity-80">
                I specialize in building user-focused, scalable, and efficient solutions. 
                With expertise in frontend technologies, AI/ML integration, and UI/UX design, I aim to bridge technology with creativity to solve real-world challenges.
              </p>
              <HashLink smooth to="#contacts" className="text-decoration-none">
                <button className="connect-button mt-4">
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>
              </HashLink>
            </div>
          </Col>
        </Row>
        {/* Scroll Button Section */}
        <Row className="justify-content-center mt-5">
          <div className="scroll-button">
            <HashLink smooth to="#about">
              <div className="scroll-indicator">
                <div className="mouse">
                  <div className="scroll"></div>
                </div>
              </div>
            </HashLink>
          </div>
        </Row>
      </Container>
    </section>
  );
};
