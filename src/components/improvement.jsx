import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Card, ListGroup, Image } from "react-bootstrap";
import Image3 from "../assets/image3.png";
import { useSurvey } from "../SurveyContext";
import "../App.css";

export default function Improvement() {
  const { evaluationResponse } = useSurvey();

  const defaultData = {
    score_criteria1: 90,
    score_criteria2: 30,
    score_criteria3: 70,
    score_criteria4: 60,
    score_criteria5: 50,
    score_criteria6: 60,
    improvement_suggestion_criteria1:
      'Maintain consistent formatting in external links and clarify "NA" designations for future scalability questions.',
    improvement_suggestion_criteria2:
      "Conduct closed beta tests with real startups to gather user feedback and quantify traction metrics before seeking investor adoption.",
    improvement_suggestion_criteria3:
      "Add granular market segmentation analysis using platforms like Crunchbase to demonstrate rising demand in AI evaluation tools.",
    improvement_suggestion_criteria4:
      "Conduct SWOT analysis against established players like Y Combinator and patent core algorithms to build competitive moats.",
    improvement_suggestion_criteria5:
      "Pilot paid tiers with early adopters and publish case studies showing startups' post-funding success rates to prove value proposition.",
    improvement_suggestion_criteria6:
      "Recruit growth hackers with SaaS experience and advisors from VC firms to strengthen go-to-market execution capabilities.",
  };

  const data = evaluationResponse || defaultData;

  const criteriaData = [
    {
      id: 1,
      title: "Application Completeness",
      score: data.score_criteria1,
      improvement: data.improvement_suggestion_criteria1,
    },
    {
      id: 2,
      title: "Product Validation",
      score: data.score_criteria2,
      improvement: data.improvement_suggestion_criteria2,
    },
    {
      id: 3,
      title: "Market Size",
      score: data.score_criteria3,
      improvement: data.improvement_suggestion_criteria3,
    },
    {
      id: 4,
      title: "Competitive Edge",
      score: data.score_criteria4,
      improvement: data.improvement_suggestion_criteria4,
    },
    {
      id: 5,
      title: "Business Model",
      score: data.score_criteria5,
      improvement: data.improvement_suggestion_criteria5,
    },
    {
      id: 6,
      title: "Team Strength",
      score: data.score_criteria6,
      improvement: data.improvement_suggestion_criteria6,
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
            <h2 className="mb-2 moonshotBlack">Improvement Suggestions</h2>
            <h6 className="mt-2 moonshotBlack">
              Improvement Suggestions provide detailed suggestions to further
              strengthen your startup idea:
            </h6>
            <p>{criterion.improvement}</p>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
}
