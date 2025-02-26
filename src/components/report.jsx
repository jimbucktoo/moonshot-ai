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
    score_criteria1: 90,
    score_criteria2: 40,
    score_criteria3: 60,
    score_criteria4: 50,
    score_criteria5: 50,
    score_criteria6: 60,
    summary_reasoning_criteria1:
      "Application is fully in English with complete responses to all 20 questions, including prototype links and detailed strategic plans.",
    summary_reasoning_criteria2:
      "While claiming Ideation Stage with a Figma prototype, there's no evidence of user testing, active users, or operational validation beyond conceptual demonstrations.",
    summary_reasoning_criteria3:
      "Top-down TAM/SAM figures appear sufficient but lack bottom-up validation through competitor benchmarks or cited market research reports.",
    summary_reasoning_criteria4:
      "Differentiates through AI matchmaking but fails to identify direct competitors (e.g., human-driven accelerators) or prove technological defensibility against clones.",
    summary_reasoning_criteria5:
      "Multiple revenue streams proposed but untested; freemium conversion rates and investor willingness to share equity remain unvalidated.",
    summary_reasoning_criteria6:
      "Core technical competencies covered but team lacks dedicated sales/marketing roles and prior scaling experience in AI platforms.",
    introduction:
      "The evaluation rigorously assesses MoonshotAI's viability across six investor-critical dimensions, balancing demonstrated capabilities against unproven assumptions in its AI-driven accelerator model.",
    criteria1:
      "Full compliance with language requirements and question depth satisfies baseline screening thresholds. The Figma prototype link and multi-phase roadmap demonstrate adequate documentation.",
    criteria2:
      "Prototype-only status without user metrics fails key validation benchmarks for Early Stage classification. Reliance on future beta testing undermines current traction claims.",
    criteria3:
      "While citing large TAM, absence of competitor revenue comparisons and trend analysis (e.g., Crunchbase funding in AI tools) leaves market viability partially unsubstantiated.",
    criteria4:
      "Differentiation through AI personalization shows potential but lacks empirical validation against human-driven alternatives. No IP disclosures weaken defensibility arguments.",
    criteria5:
      "Revenue model creativity offset by untested pricing elasticity and equity stake mechanics. Churn risks in freemium startups post-funding require mitigation strategies.",
    criteria6:
      "Technical founding strength contrasts with missing business development expertise. While ML capabilities are proven, investor network access remains a critical gap.",
    conclusion:
      "MoonshotAI demonstrates strong technical foundations but requires urgent validation of market assumptions and traction metrics to justify investor confidence.",
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
      <h1 className="mb-4 mt-3 moonshotWhite">Evaluation Report</h1>
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="moonshotWhite">
            <h5>Overall Score:</h5>
          </span>
          <span
            className="display-4"
            style={{ color: getGradientColor(overallScore) }}
          >
            {overallScore.toFixed(1)}
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
            <div className="card p-3 border-dark">
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
              <h6 className="mt-2">Reasoning Analysis:</h6>
              <p className="text-muted">{criterion.reasoning}</p>
              <Link to={`/improvement/${criterion.id}`}>
                <Button variant="primary">Improvement Suggestions</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {data.introduction && (
        <div className="mb-4 p-3 border-dark rounded thought moonshotBlack">
          <h3 className="moonshotBlack">Chain-of-Thought Reasoning</h3>
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
        </div>
      )}
    </div>
  );
}
