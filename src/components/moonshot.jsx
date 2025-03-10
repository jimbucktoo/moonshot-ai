import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image1 from "../assets/image1.png";
import Logo from "../assets/MoonshotAILogoWhite.png";
import "../App.css";

export default function Moonshot() {
  return (
    <main className="moonshot">
      <Container className="py-4">
        <Row className="align-items-center">
          <Col md={8} className="text-center text-md-start">
            <img src={Logo} alt="MoonshotAI Logo" width={360} />
            <h1>
              The <span className="highlight">AI-Powered Evaluator</span> for{" "}
              <span className="highlight">Startup Success</span>
            </h1>
            <br />
            <div className="my-1">
              <h3>Transform Your Startup Idea into Reality</h3>
              <br />
              <h3>Actionable Insights.</h3>
              <h3>Smarter Decisions.</h3>
              <h3>Greater Success.</h3>
            </div>
            <br />
            <h5>
              Unlock your startup’s potential with AI-powered evaluations for
              smarter, data-driven decisions.
            </h5>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
              <Link to="/product-overview">
                <Button className="rounded-pill" variant="primary" size="lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </Col>
          <Col md={4} className="d-none d-md-block text-center">
            <img
              className="moonshotImage ms-5"
              src={Image1}
              alt="Moonshot Man"
              height={480}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
