import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Card, Image } from "react-bootstrap";
import Image3 from "../assets/image3.png";
import { useSurvey } from "../SurveyContext";
import "../App.css";
import ReactMarkdown from "react-markdown";

export default function NoveltyScore() {
  const { evaluationResponse } = useSurvey();
  const navigate = useNavigate();
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch("/analysis_report.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  const getGradientColor = (score) => {
    const red = { r: 255, g: 0, b: 0 };
    const blue = { r: 13, g: 110, b: 253 };

    const ratio = 1 - score / 100;

    const r = Math.round(blue.r * (1 - ratio) + red.r * ratio);
    const g = Math.round(blue.g * (1 - ratio) + red.g * ratio);
    const b = Math.round(blue.b * (1 - ratio) + red.b * ratio);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <Container className="py-4">
      <Button variant="primary" className="mb-3" onClick={() => navigate(-2)}>
        Back to Report
      </Button>
      <Card className="moonshotBgWhite mt-3 border-0">
        <Card.Body>
          <div className="d-flex align-items-center mb-3">
            <Image src={Image3} alt="Moonshot Man" height={240} roundedCircle />
            <div className="ms-2">
              <h1 className="moonshotBlack">Novelty Score</h1>
              <div className="d-flex align-items-center gap-2 moonshotBlack">
                <span className="h4">Score: </span>
                <span className="h4" style={{ color: getGradientColor(85) }}>
                  85
                </span>
              </div>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `85%`,
                    background: "linear-gradient(to right, #ff0000, #0d6efd)",
                  }}
                />
              </div>
            </div>
          </div>
          <Card className="p-3 mt-3 border-dark border-0 shadow">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
}
