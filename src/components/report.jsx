import React from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSurvey } from "../SurveyContext";

export default function EvaluationReport() {
  const { evaluationResponse } = useSurvey();
  const criteria = [
    {
      id: 1,
      title: "Application Completeness",
      score: evaluationResponse.score_criteria1,
      description: evaluationResponse.improvement_suggestion_criteria1,
    },
    {
      id: 2,
      title: "Product Validation",
      score: evaluationResponse.score_criteria2,
      description: evaluationResponse.improvement_suggestion_criteria2,
    },
    {
      id: 3,
      title: "Market Size",
      score: evaluationResponse.score_criteria3,
      description: evaluationResponse.improvement_suggestion_criteria3,
    },
    {
      id: 4,
      title: "Competitive Edge",
      score: evaluationResponse.score_criteria4,
      description: evaluationResponse.improvement_suggestion_criteria4,
    },
    {
      id: 5,
      title: "Business Model",
      score: evaluationResponse.score_criteria5,
      description: evaluationResponse.improvement_suggestion_criteria5,
    },
    {
      id: 6,
      title: "Team Strength",
      score: evaluationResponse.score_criteria6,
      description: evaluationResponse.improvement_suggestion_criteria6,
    },
  ];

  const calculateOverallScore = () => {
    const total = criteria.reduce((acc, curr) => acc + curr.score, 0);
    return Math.round(total / criteria.length);
  };

  useEffect(() => {
    if (evaluationResponse) {
      console.log("Evaluation Report:", evaluationResponse);
    }
  }, [evaluationResponse]);

  return (
    <div className="container py-5">
      <h1 className="mb-4">Your Evaluation Report</h1>
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="h5">Overall Score:</span>
          <span className="display-4 text-primary">
            {evaluationResponse.overall_score}
          </span>
        </div>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${evaluationResponse.overall_score}%`,
              background: "linear-gradient(to right, #ff6b00, #17b7ba)",
            }}
          />
        </div>
      </div>

      <div className="row">
        {criteria.map((criterion) => (
          <div key={criterion.id} className="col-md-6 mb-4">
            <div className="card p-3 border-primary">
              <h3 className="text-primary">{criterion.title}</h3>
              <div className="mb-2">
                <div className="d-flex align-items-center gap-2">
                  <span>Score:</span>
                  <span className="h4 text-primary">{criterion.score}</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${criterion.score}%`,
                      background: "linear-gradient(to right, #ff6b00, #17b7ba)",
                    }}
                  />
                </div>
              </div>
              <p className="text-muted">{criterion.description}</p>
              <Link to={`/reasoning/${criterion.id}`}>
                <Button variant="outline-primary">
                  Reasoning for the analysis
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
