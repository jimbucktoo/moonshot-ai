import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Card, ListGroup, Image } from "react-bootstrap";
import Image3 from "../assets/image3.png";
import { useSurvey } from "../SurveyContext";
import "../App.css";

export default function Details() {
  const { evaluationResponse } = useSurvey();

  const defaultData = {
    score_criteria1: 80,
    score_criteria2: 50,
    score_criteria3: 70,
    score_criteria4: 60,
    score_criteria5: 60,
    score_criteria6: 70,
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
      detailed_reasoning: data.detailed_reasoning_criteria1,
      improvement: data.improvement_suggestion_criteria1,
    },
    {
      id: 2,
      title: "Product Validation",
      score: data.score_criteria2,
      detailed_reasoning: data.detailed_reasoning_criteria2,
      improvement: data.improvement_suggestion_criteria2,
    },
    {
      id: 3,
      title: "Market Size",
      score: data.score_criteria3,
      detailed_reasoning: data.detailed_reasoning_criteria3,
      improvement: data.improvement_suggestion_criteria3,
    },
    {
      id: 4,
      title: "Competitive Edge",
      score: data.score_criteria4,
      detailed_reasoning: data.detailed_reasoning_criteria4,
      improvement: data.improvement_suggestion_criteria4,
    },
    {
      id: 5,
      title: "Business Model",
      score: data.score_criteria5,
      detailed_reasoning: data.detailed_reasoning_criteria5,
      improvement: data.improvement_suggestion_criteria5,
    },
    {
      id: 6,
      title: "Team Strength",
      score: data.score_criteria6,
      detailed_reasoning: data.detailed_reasoning_criteria6,
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
    const teal = { r: 23, g: 183, b: 186 };

    const ratio = 1 - score / 100;

    const r = Math.round(teal.r * (1 - ratio) + red.r * ratio);
    const g = Math.round(teal.g * (1 - ratio) + red.g * ratio);
    const b = Math.round(teal.b * (1 - ratio) + red.b * ratio);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <Container className="py-4">
      <Button
        variant="primary"
        className="mb-3 moonshotButtonTeal"
        onClick={() => navigate(-1)}
      >
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
                    background: "linear-gradient(to right, #ff0000, #17b7ba)",
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
