import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Card, ListGroup, Image } from "react-bootstrap";
import Image3 from "../assets/image3.png";
import { useSurvey } from "../SurveyContext";
import "../App.css";

export default function DetailedReasoning() {
  const { evaluationResponse } = useSurvey();

  const defaultData = {
    score_criteria1: 70,
    score_criteria2: 30,
    score_criteria3: 60,
    score_criteria4: 40,
    score_criteria5: 50,
    score_criteria6: 50,
    detailed_reasoning_criteria1:
      "The application is entirely in English and addresses all 20 questions, though some answers lack depth (e.g., team experience is summarized without specific achievements). The Figma prototype link demonstrates tangible progress, and the roadmap includes measurable milestones. However, answers like 'currently no formal partnerships' lack actionable plans, and claims about AI accuracy remain unproven. While intelligible and structurally complete, the lack of granularity in technical validation and partnership strategies prevents a higher score.",
    detailed_reasoning_criteria2:
      "The product is self-identified as Ideation Stage with a Figma prototype and PoC using DeepSeek, but lacks evidence of user testing or traction. No active users are reported, and the 'promising' prototype output lacks performance metrics (e.g., accuracy rates vs human evaluators). While the roadmap plans for 1,000 beta users in 6–12 months, current validation is purely technical, not market-tested. Investors require proof of problem-solution fit through early adopters, which is absent here.",
    detailed_reasoning_criteria3:
      "The stated TAM ($300B annual startup investments) is plausible but lacks segmentation. No SAM/SOM breakdown is provided (e.g., targeting AI-native founders vs all startups). While the 20M startups figure aligns with Gartner data, the proposal doesn’t address market saturation (e.g., how many competitors serve this space) or regional focus. Bottom-up validation is missing—for example, if 1% of startups pay $100/month, revenue would be $20M annually, but this isn’t modeled.",
    detailed_reasoning_criteria4:
      "While MoonshotAI differentiates via AI-driven evaluations, competitors like Y Combinator’s Startup School and PitchBook offer similar validation tools and investor networks. The AI 'transparency' claim isn’t substantiated—no details on model explainability (e.g., LIME/SHAP integration) versus black-box alternatives. No patents or proprietary algorithms are mentioned. The network effect potential exists but requires critical mass currently absent.",
    detailed_reasoning_criteria5:
      "The freemium model and equity stakes are logical but untested. No pricing page or willingness-to-pay data is provided—would startups pay $99/month without proven ROI? The equity model risks misalignment if VCs bypass the platform post-introduction. Revenue diversification is good, but lacks prioritization (e.g., subscriptions vs premium services).",
    detailed_reasoning_criteria6:
      "The team covers core technical roles but lacks business development and marketing expertise. The founder’s 1-year startup experience is insufficient for scaling—no prior exits or fundraising success noted. While ML and dev skills are adequate, the absence of a growth hacker or sales lead creates execution risk. No advisors are mentioned.",
  };

  const data = evaluationResponse || defaultData;

  const criteriaData = [
    {
      id: 1,
      title: "Application Completeness",
      score: data.score_criteria1,
      detailed_reasoning: data.detailed_reasoning_criteria1,
    },
    {
      id: 2,
      title: "Product Validation",
      score: data.score_criteria2,
      detailed_reasoning: data.detailed_reasoning_criteria2,
    },
    {
      id: 3,
      title: "Market Size",
      score: data.score_criteria3,
      detailed_reasoning: data.detailed_reasoning_criteria3,
    },
    {
      id: 4,
      title: "Competitive Edge",
      score: data.score_criteria4,
      detailed_reasoning: data.detailed_reasoning_criteria4,
    },
    {
      id: 5,
      title: "Business Model",
      score: data.score_criteria5,
      detailed_reasoning: data.detailed_reasoning_criteria5,
    },
    {
      id: 6,
      title: "Team Strength",
      score: data.score_criteria6,
      detailed_reasoning: data.detailed_reasoning_criteria6,
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
            <h2 className="mb-2 moonshotBlack">Detailed Reasoning</h2>
            <h6 className="mt-2 moonshotBlack">
              Detailed Reasoning provides detailed explanations to further
              strengthen your startup idea:
            </h6>
            <p>{criterion.detailed_reasoning}</p>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
}
