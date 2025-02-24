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
    think_section:
      "Okay, let's start by evaluating the startup idea based on the given criteria. First, Criteria 1 checks if the application is complete and in English. The provided answers are all in English, and they've answered all 20 questions. There's a Figma link for the prototype, which is acceptable. So, this seems complete. Maybe a high score here, like 90. Criteria 2 is about product validation. The startup is in the Ideation/Pre-Seed stage, which is just concept. They mention a prototype and a Figma link, but no user testing or traction. The answer about current users says they don't have any yet. So, they're still at concept, not even prototype. That would be a low score, maybe 30. The summary would note the lack of active users or testing. Criteria 3 assesses market size. They mention 20 million startups and $300 billion invested annually. That's a large TAM. But they don't provide sources for these numbers. Also, using Google Trends or funding data isn't shown. So, maybe a 70 because the market is big, but validation is lacking. Criteria 4 is about competition. They compare to traditional accelerators but don't list direct competitors. They mention AI-driven evaluations as a differentiator, but is that enough? The moat isn't clear. Maybe a 60, as they have some differentiation but unclear competitive analysis. Criteria 5 looks at the business model. They have a subscription model, equity stakes, and premium services. However, no evidence of user payments or recurring revenue yet. Since they're pre-revenue, this is uncertain. Score around 50. Criteria 6 evaluates the team. The team has relevant experience in AI, product management, and development. But the team is small, and there's no mention of prior successful exits or scaling experience. So, maybe 60. They have the skills but limited track record. Overall average would be the average of all scores: (90 +30 +70 +60 +50 +60)/6 = 60. So, 60 overall.",
  };

  const data = evaluationResponse || defaultData;

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
            style={{ color: getGradientColor(data.overall_score) }}
          >
            {data.overall_score}
          </span>
        </div>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${data.overall_score}%`,
              background: "linear-gradient(to right, #ff0000, #0d6efd)",
            }}
          />
        </div>
      </div>
      <div className="row">
        {criteria.map((criterion) => (
          <div key={criterion.id} className="col-md-6 mb-4">
            <div className="card p-3 border-dark">
              <h3 className="">{criterion.title}</h3>
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
        <div className="mb-4 p-3 border-dark rounded thought">
          <h3 className="moonshotBlack">Chain-of-Thought Reasoning</h3>
          <h6 className="mt-3 moonshotBlack">
            Chain-of-Thought Reasoning will break down your evaluation report
            step by step, providing clearer insights and empowering better
            decision-making:
          </h6>
          <p className="text-muted">{data.think_section}</p>
        </div>
      )}
    </div>
  );
}
