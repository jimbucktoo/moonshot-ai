import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Card, ListGroup, Image } from "react-bootstrap";
import Image3 from "../assets/image3.png";
import { useSurvey } from "../SurveyContext";
import "../App.css";

export default function Reasoning() {
  const { evaluationResponse } = useSurvey();

  const defaultData = {
    score_criteria1: 80,
    score_criteria2: 70,
    score_criteria3: 85,
    score_criteria4: 60,
    score_criteria5: 78,
    score_criteria6: 88,
    summary_reasoning_criteria1:
      "Application completeness needs better documentation.",
    summary_reasoning_criteria2:
      "Product validation requires more market research.",
    summary_reasoning_criteria3: "Market size analysis lacks depth.",
    summary_reasoning_criteria4:
      "Competitive edge should be more clearly defined.",
    summary_reasoning_criteria5:
      "Business model needs a stronger revenue projection.",
    summary_reasoning_criteria6:
      "Team strength should highlight expertise more explicitly.",
  };

  const data = evaluationResponse || defaultData;

  const criteriaData = [
    {
      id: 1,
      title: "Application Completeness",
      score: data.score_criteria1,
      reasoning: data.summary_reasoning_criteria1,
    },
    {
      id: 2,
      title: "Product Validation",
      score: data.score_criteria2,
      reasoning: data.summary_reasoning_criteria2,
    },
    {
      id: 3,
      title: "Market Size",
      score: data.score_criteria3,
      reasoning: data.summary_reasoning_criteria3,
    },
    {
      id: 4,
      title: "Competitive Edge",
      score: data.score_criteria4,
      reasoning: data.summary_reasoning_criteria4,
    },
    {
      id: 5,
      title: "Business Model",
      score: data.score_criteria5,
      reasoning: data.summary_reasoning_criteria5,
    },
    {
      id: 6,
      title: "Team Strength",
      score: data.score_criteria6,
      reasoning: data.summary_reasoning_criteria6,
    },
  ];

  const navigate = useNavigate();
  const { id } = useParams();
  const criterionId = Number(id);

  const criterion = criteriaData.find((c) => c.id === criterionId);

  if (!criterion) {
    return <div>Criterion not found</div>;
  }

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
      <Button variant="primary" className="mb-3" onClick={() => navigate(-1)}>
        Back to Report
      </Button>
      <Card className="moonshotBgBlack mt-3 border-0">
        <Card.Body>
          <div className="d-flex align-items-center mb-3">
            <Image src={Image3} alt="Moonshot Man" height={240} roundedCircle />
            <div className="ms-2">
              <h1 className="moonshotWhite">{criterion.title}</h1>
              <div className="d-flex align-items-center gap-2 moonshotWhite">
                <span className="h4">Score: </span>
                <span
                  className="h4"
                  style={{ color: getGradientColor(criterion.score) }}
                >
                  {criterion.score}
                </span>
              </div>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${criterion.score}%`,
                    background: "linear-gradient(to right, #ff0000, #0d6efd)", // Red at 0%, Blue at 100%
                  }}
                />
              </div>
            </div>
          </div>
          <Card className="p-3 mt-3">
            <h2 className="mb-2 moonshotBlack">Reasoning Analysis</h2>
            <h6 className="mt-2 moonshotBlack">
              Reasoning Analysis provides a detailed breakdown of why MoonshotAI
              assigned a specific score to each criterion:
            </h6>
            <p>{criterion.reasoning}</p>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
}
