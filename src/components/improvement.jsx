import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Card, ListGroup, Image } from "react-bootstrap";
import Image3 from "../assets/image3.png";
import { useSurvey } from "../SurveyContext";
import "../App.css";

export default function Improvement() {
  const { evaluationResponse } = useSurvey();

  const defaultData = {
    score_criteria1: 70,
    score_criteria2: 30,
    score_criteria3: 60,
    score_criteria4: 40,
    score_criteria5: 50,
    score_criteria6: 50,
    improvement_suggestion_criteria1:
      "Strengthen answers with quantifiable data: Add metrics for the founder’s prior product (e.g., 'led a product reaching 15k MAUs'). Provide screenshots or video demos of the Figma prototype to demonstrate functionality. Outline partnership negotiation timelines (e.g., 'targeting 3 accelerator partnerships by Q3 2024'). Include third-party validation, such as beta-test agreements with incubators. Use bullet points to clarify team roles beyond titles (e.g., 'ML Engineer reduced model latency by 40% in prior role').",
    improvement_suggestion_criteria2:
      "Launch a closed beta with 50+ startups within 3 months, publishing anonymized feedback and success metrics (e.g., '70% of users implemented recommendations'). Partner with one accelerator for a pilot program, tracking metrics like investor matchmaking efficiency. Compare AI evaluations against human experts in a blinded study to validate accuracy. Add a 'Testimonials' section with quotes from beta users.",
    improvement_suggestion_criteria3:
      "Calculate SAM/SOM: Define target segments (e.g., pre-seed tech startups in North America and Europe) totaling 500k addressable startups. Model revenue at 5% penetration with a $200/month subscription. Cite Crunchbase data showing 22% YoY growth in AI startup investments. Add a SWOT analysis of market risks (e.g., investor skepticism toward AI evaluators).",
    improvement_suggestion_criteria4:
      "File a provisional patent for the evaluation algorithm. Publish a benchmark study showing 30% higher prediction accuracy vs human mentors. Integrate unique data sources (e.g., scraping Crunchbase for real-time funding trends). Partner with a major VC firm to co-develop investor-specific features, creating exclusivity.",
    improvement_suggestion_criteria5:
      "Test pricing with 50 startups via surveys, offering tiered plans (e.g., $49–$499/month). Pilot the equity model with 10 startups, tracking platform retention post-funding. Add a 'Revenue Simulation' section showing break-even at 2,000 subscribers. Explore API monetization for accelerators.",
    improvement_suggestion_criteria6:
      "Hire a Head of Growth with SaaS scaling experience or onboard an advisor from Techstars/500 Startups. Detail the founder’s prior user acquisition strategy (e.g., 'Grew MVP to 5k users via LinkedIn ads'). Add a biz-dev co-founder with VC connections. Publish team bios with LinkedIn profiles for credibility.",
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
      <Card className="moonshotBgWhite mt-3 border-0">
        <Card.Body>
          <div className="d-flex align-items-center mb-3">
            <Image src={Image3} alt="Moonshot Man" height={240} roundedCircle />
            <div className="ms-2">
              <h1 className="moonshotBlack">{criterion.title}</h1>
              <div className="d-flex align-items-center gap-2 moonshotBlack">
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
          <Card className="p-3 mt-3 border-dark border-0 shadow">
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
