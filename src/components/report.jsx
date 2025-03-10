import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSurvey } from "../SurveyContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Report() {
  const { evaluationResponse, setFormData, setEvaluationResponse } =
    useSurvey();
  const navigate = useNavigate();

  const defaultData = {
    score_criteria1: 70,
    score_criteria2: 30,
    score_criteria3: 60,
    score_criteria4: 40,
    score_criteria5: 50,
    score_criteria6: 50,
    summary_reasoning_criteria1:
      "The application meets basic completeness requirements with English responses and a prototype, but lacks depth in critical areas like partnership development and technical validation. It sufficiently addresses all questions but requires more concrete evidence and specificity to achieve full marks.",
    summary_reasoning_criteria2:
      "Despite having a prototype, the absence of user feedback, pilot programs, or measurable engagement places MoonshotAI firmly in the concept phase. Validation remains theoretical rather than empirical, failing to meet the threshold for Early Traction.",
    summary_reasoning_criteria3:
      "The market size assertion is directionally correct but lacks analytical rigor. Without segmentation, pricing tiers, or competitor benchmarking, the actual serviceable market remains unproven.",
    summary_reasoning_criteria4:
      "The platform’s AI focus provides differentiation, but without defensible IP or proven superiority over human-driven accelerators, the competitive moat is weak. Market entry barriers for clones remain low.",
    summary_reasoning_criteria5:
      "While the revenue model is conceptually sound, the absence of pricing validation and unclear unit economics (e.g., CAC vs LTV) makes sustainability uncertain.",
    summary_reasoning_criteria6:
      "The team is minimally viable for product development but lacks proven scaling experience and complementary business skills. Investor confidence would require adding roles with go-to-market expertise.",
    introduction:
      "MoonshotAI presents a conceptually strong AI-driven accelerator platform but requires significant validation and strategic pivots to meet investor expectations. While the technical foundation exists, gaps in market proof, team composition, and competitive defensibility necessitate targeted improvements.",
    criteria1:
      "Structural completeness achieved, but lacks operational specifics and third-party validation.",
    criteria2:
      "Ideation-stage status with unvalidated prototype fails to demonstrate market readiness.",
    criteria3:
      "Large TAM cited without realistic SOM analysis or pricing validation.",
    criteria4:
      "Differentiation exists but lacks IP protection and performance benchmarks against competitors.",
    criteria5:
      "Revenue model plausible but unproven; unit economics undefined.",
    criteria6:
      "Technically competent team missing critical growth and sales roles.",
    conclusion:
      "MoonshotAI requires 6–12 months of focused user validation, team expansion, and IP development to become fundable. Current scoring reflects high potential offset by execution risks.",
    think_section:
      "Okay, let's start evaluating this startup proposal for MoonshotAI based on the given criteria. \n\nFirst, Criteria 1: Completeness and Intelligibility. The application is in English, so that's good. They answered all 20 questions, but some answers are brief. For example, the team experience mentions prior startup experience and skills but lacks specific details. The prototype link is provided, which is a plus. However, some sections like strategic partnerships are marked as 'currently no formal partnerships,' which is okay but might need more context. Overall, it's complete but could use more depth in certain areas.\n\nCriteria 2: Validation/Testing. The product is in the Ideation Stage (Pre-Seed), with a prototype and a Figma demo. They mention a PoC using DeepSeek but no user testing yet. No active users currently. Since they're still in the prototype phase without real user feedback, they haven't moved beyond the concept stage. This might be a red flag for investors looking for validated ideas.\n\nCriteria 3: Market Size. They cite 20 million startups and $300 billion annual investments. TAM seems large, but they don't break down SAM or SOM. Without specific segmentation, it's hard to assess the obtainable market. They need more detailed analysis using both top-down and bottom-up approaches to validate these numbers.\n\nCriteria 4: Competitive Edge. They mention AI-driven evaluations and matchmaking as differentiators. However, competitors like Y Combinator or existing AI tools might offer similar services. The SWOT analysis isn't provided, and there's no clear moat mentioned. They need to articulate what makes their AI superior and how they'll sustain that advantage.\n\nCriteria 5: Business Model. They have a subscription model, equity stakes, and premium services. However, without evidence of user willingness to pay or existing revenue, it's theoretical. The freemium model could attract users, but conversion to paid needs validation. They should test pricing and gather feedback on revenue streams.\n\nCriteria 6: Team. The team has relevant skills in AI, product management, and development. However, the founder's experience is limited (1 year in startups), and there's no mention of prior successful exits or scaling. The team lacks marketing/business development roles, which is crucial for customer acquisition and partnerships. They need to expand the team or secure advisors to fill these gaps.\n\nEach criterion needs a score based on the rubric. For example, Criteria 2 is in the Ideation Stage without user validation, so a lower score. The team (Criteria 6) has technical skills but lacks business experience, so a moderate score. The market size (Criteria 3) is large but not well-supported, leading to a mid-range score. \n\nImprovement suggestions should address each criterion's weaknesses. For instance, conducting user testing for validation, detailed market analysis, competitive SWOT, revenue model testing, and team expansion.",
  };

  const data = evaluationResponse || defaultData;

  const overallScore =
    (data.score_criteria1 +
      data.score_criteria2 +
      data.score_criteria3 +
      data.score_criteria4 +
      data.score_criteria5 +
      data.score_criteria6) /
    6;

  const criteria = [
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

  useEffect(() => {
    console.log("Report:", data);
  }, [data]);

  const getGradientColor = (score) => {
    const red = { r: 255, g: 0, b: 0 };
    const blue = { r: 13, g: 110, b: 253 };

    const ratio = 1 - score / 100;

    const r = Math.round(blue.r * (1 - ratio) + red.r * ratio);
    const g = Math.round(blue.g * (1 - ratio) + red.g * ratio);
    const b = Math.round(blue.b * (1 - ratio) + red.b * ratio);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleResetAndNavigate = () => {
    setFormData({
      challenges: "",
      customerAcquisition: "",
      experience: "",
      feasibility: "",
      funding: "",
      goal: "",
      innovation: "",
      marketSize: "",
      milestones: "",
      partnerships: "",
      plan: "",
      problem: "",
      prototype: "",
      revenueModel: "",
      roles: "",
      stage: "",
      summary: "",
      support: "",
      teamMembers: "",
      users: "",
    });

    setEvaluationResponse(null);

    navigate("/");
  };

  const handleGenerateNoveltyScore = () => {
    navigate("/generating");
  };

  const bulletChainOfThoughtItems = [
    { label: "Application Completeness", text: data.criteria1 },
    { label: "Product Validation", text: data.criteria2 },
    { label: "Market Size", text: data.criteria3 },
    { label: "Competitive Edge", text: data.criteria4 },
    { label: "Business Model", text: data.criteria5 },
    { label: "Team Strength", text: data.criteria6 },
  ];

  return (
    <div className="container py-5">
      <Button
        variant="primary"
        className="mb-3"
        onClick={handleResetAndNavigate}
      >
        Start a New Evaluation
      </Button>
      <Button
        variant="secondary"
        className="mb-3 ms-3"
        onClick={handleGenerateNoveltyScore}
      >
        Generate Novelty Score
      </Button>
      <h1 className="mb-4 mt-3 moonshotBlack">Evaluation Report</h1>
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="moonshotBlack">
            <h5>Overall Score:</h5>
          </span>
          <span
            className="display-4"
            style={{ color: getGradientColor(overallScore) }}
          >
            <b>{overallScore.toFixed(1)}</b>
          </span>
        </div>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${overallScore}%`,
              background: "linear-gradient(to right, #ff0000, #0d6efd)",
            }}
          />
        </div>
      </div>
      <div className="row">
        {criteria.map((criterion) => (
          <div key={criterion.id} className="col-md-6 mb-4">
            <div className="card p-3 border-dark border-0 shadow">
              <h3>{criterion.title}</h3>
              <div className="mb-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="h4">Score:</span>
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
                      background: "linear-gradient(to right, #ff0000, #0d6efd)",
                    }}
                  />
                </div>
              </div>
              <h6 className="mt-2">Reasoning Summary:</h6>
              <p className="text-muted">{criterion.reasoning}</p>
              <div className="d-flex justify-content-start gap-3">
                <Link to={`/detailed-reasoning/${criterion.id}`}>
                  <Button variant="primary">Detailed Reasoning</Button>
                </Link>
                <Link to={`/improvement/${criterion.id}`}>
                  <Button variant="primary">Improvement Suggestions</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {data.introduction && (
        <div className="mb-4 p-3 border-dark rounded thought moonshotBlack">
          <h3 className="moonshotBlack">Chain-of-Thought Outline</h3>
          <h6 className="mt-3 moonshotBlack">
            Detailed breakdown of your evaluation:
          </h6>
          {data.introduction && (
            <div className="mb-3">
              <p>{data.introduction}</p>
            </div>
          )}
          <ul>
            {bulletChainOfThoughtItems.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong> {item.text}
              </li>
            ))}
          </ul>
          {data.conclusion && (
            <div className="mt-3">
              <p>{data.conclusion}</p>
            </div>
          )}
          <h3 className="moonshotBlack">Chain-of-Thought Reasoning</h3>
          <p>{data.think_section}</p>
        </div>
      )}
    </div>
  );
}
