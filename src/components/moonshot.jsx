import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image1 from "../assets/image1.png";
import Logo from "../assets/MoonshotAILogo.png";
import "../App.css";

export default function Moonshot() {
  return (
    <main className="mainContent">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <img src={Logo} alt="MoonshotAI Logo" width={500} />
            <h1>Turn Your Startup Idea into Reality</h1>
            <br />
            <h1>🚀 🌖</h1>
            <br />
            <div className="my-1">
              <h2>Insightful Evaluations.</h2>
              <h2>Smarter Decisions.</h2>
              <h2>Better Outcomes.</h2>
            </div>
            <br />
            <p className="lead">
              Discover your startup's true potential with detailed, AI-powered
              insights.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
              <Link to="/product-overview">
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </Col>
          <Col md={6} className="d-none d-md-block text-center">
            <img
              src={Image1}
              alt="Startup illustration"
              width={500}
              height={600}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
