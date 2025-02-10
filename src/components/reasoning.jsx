import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Card, ListGroup, Image } from "react-bootstrap";
import Image2 from "../assets/image2.png";
import { useSurvey } from "../SurveyContext";

export default function Reasoning() {
  const { evaluationResponse } = useSurvey();

  const criteriaData = [
    {
      id: 1,
      title: "Application Completeness",
      score: evaluationResponse.score_criteria1,
      reasoning: evaluationResponse.summary_reasoning_criteria1,
    },
    {
      id: 2,
      title: "Product Validation",
      score: evaluationResponse.score_criteria2,
      reasoning: evaluationResponse.summary_reasoning_criteria2,
    },
    {
      id: 3,
      title: "Market Size",
      score: evaluationResponse.score_criteria3,
      reasoning: evaluationResponse.summary_reasoning_criteria3,
    },
    {
      id: 4,
      title: "Competitive Edge",
      score: evaluationResponse.score_criteria4,
      reasoning: evaluationResponse.summary_reasoning_criteria4,
    },
    {
      id: 5,
      title: "Business Model",
      score: evaluationResponse.score_criteria5,
      reasoning: evaluationResponse.summary_reasoning_criteria5,
    },
    {
      id: 6,
      title: "Team Strength",
      score: evaluationResponse.score_criteria6,
      reasoning: evaluationResponse.summary_reasoning_criteria6,
    },
  ];

  const navigate = useNavigate();
  const { id } = useParams();
  const criterionId = Number(id);

  const criterion = criteriaData.find((c) => c.id === criterionId);

  if (!criterion) {
    return <div>Criterion not found</div>;
  }

  return (
    <div className="min-vh-100 bg-light">
      <Container className="py-4">
        <Button
          variant="outline-primary"
          className="mb-3"
          onClick={() => navigate(-1)}
        >
          Back to Report
        </Button>
        <Card className="shadow-sm">
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <Image
                src={Image2}
                alt="Criterion illustration"
                width={100}
                height={100}
                roundedCircle
              />
              <div className="ms-3">
                <h1 className="text-primary">{criterion.title}</h1>
                <h4>
                  Score:{" "}
                  <span className="fw-bold text-primary">
                    {criterion.score}
                  </span>
                </h4>
              </div>
            </div>
            <Card className="bg-light p-3">
              <h2 className="mb-3">Reasoning Analysis</h2>
              <p>{criterion.reasoning}</p>
            </Card>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
