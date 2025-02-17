import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSurvey } from "../SurveyContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function EvaluationReport() {
  const { evaluationResponse } = useSurvey();
  const navigate = useNavigate();

  const defaultData = {
    overall_score: 75,
    score_criteria1: 80,
    score_criteria2: 70,
    score_criteria3: 85,
    score_criteria4: 60,
    score_criteria5: 78,
    score_criteria6: 88,
    improvement_suggestion_criteria1:
      "Ensure all required fields are completed.",
    improvement_suggestion_criteria2:
      "Provide stronger validation with market data.",
    improvement_suggestion_criteria3: "Expand on target audience analysis.",
    improvement_suggestion_criteria4:
      "Highlight unique selling points more clearly.",
    improvement_suggestion_criteria5: "Clarify monetization strategies.",
    improvement_suggestion_criteria6: "Showcase team experience and expertise.",
    think_section:
      "Criteria 1: Needs a stronger foundation. Summary: Improve documentation.\nCriteria 2: Validation lacks depth. Summary: Conduct more user tests.",
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

  return (
    <div className="container py-5">
      <Button variant="primary" className="mb-3" onClick={() => navigate("/")}>
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
