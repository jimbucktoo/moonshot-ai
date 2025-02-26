import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSurvey } from "../SurveyContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function EvaluationReport() {
  const { evaluationResponse, setFormData, setEvaluationResponse } =
    useSurvey();
  const navigate = useNavigate();

  const defaultData = {
    overall_score: 60,
    score_criteria1: 90,
    score_criteria2: 30,
    score_criteria3: 70,
    score_criteria4: 60,
    score_criteria5: 50,
    score_criteria6: 60,
    improvement_suggestion_criteria1:
      "No improvements needed for completeness or language compliance.",
    improvement_suggestion_criteria2:
      "Conduct closed beta tests with real startups, collect quantitative user feedback, and demonstrate operational progress beyond conceptual design.",
    improvement_suggestion_criteria3:
      "Include third-party market research citations and comparative analysis of rising demand through search/funding trends.",
    improvement_suggestion_criteria4:
      "Conduct SWOT analysis against existing AI evaluation tools (e.g., Zirra, PitchBook) and document proprietary AI architecture as moat.",
    improvement_suggestion_criteria5:
      "Validate pricing through pre-orders/pilot contracts with accelerators. Add freemium-to-paid conversion metrics to roadmap.",
    improvement_suggestion_criteria6:
      "Recruit advisor with accelerator/VC industry experience. Add UX researcher role to strengthen user feedback loops.",
    introduction:
      'The proposal "Test" lacks all required elements for proper evaluation across all criteria. Each criterion fails due to insufficient information.',
    criteria1:
      "Single-word response violates completeness requirements. No answers to 20 questions, making evaluation impossible.",
    criteria2:
      "Absence of stage declaration, user metrics, or operational evidence indicates pure conceptual status.",
    criteria3:
      "Zero market sizing data prevents assessment of demand viability.",
    criteria4:
      "No competitive landscape analysis renders differentiation unverifiable.",
    criteria5:
      "Missing business model components show no path to sustainability.",
    criteria6: "Team structure and capabilities completely undefined.",
    conclusion:
      "Proposal fails all evaluation dimensions due to incomplete submission. Comprehensive revisions required for meaningful assessment.",
    think_section: "Full chain-of-thought is available",
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
      description: data.improvement_suggestion_criteria1,
    },
    {
      id: 2,
      title: "Product Validation",
      score: data.score_criteria2,
      description: data.improvement_suggestion_criteria2,
    },
    {
      id: 3,
      title: "Market Size",
      score: data.score_criteria3,
      description: data.improvement_suggestion_criteria3,
    },
    {
      id: 4,
      title: "Competitive Edge",
      score: data.score_criteria4,
      description: data.improvement_suggestion_criteria4,
    },
    {
      id: 5,
      title: "Business Model",
      score: data.score_criteria5,
      description: data.improvement_suggestion_criteria5,
    },
    {
      id: 6,
      title: "Team Strength",
      score: data.score_criteria6,
      description: data.improvement_suggestion_criteria6,
    },
  ];

  useEffect(() => {
    console.log("Evaluation Report:", data);
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
    { label: "Criteria 1", text: data.criteria1 },
    { label: "Criteria 2", text: data.criteria2 },
    { label: "Criteria 3", text: data.criteria3 },
    { label: "Criteria 4", text: data.criteria4 },
    { label: "Criteria 5", text: data.criteria5 },
    { label: "Criteria 6", text: data.criteria6 },
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
              <h6 className="mt-2">Improvement Suggestions:</h6>
              <p className="text-muted">{criterion.description}</p>
              <Link to={`/reasoning/${criterion.id}`}>
                <Button variant="primary">Reasoning Analysis</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {data.think_section && (
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
