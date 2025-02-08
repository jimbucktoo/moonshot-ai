import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EvaluationReport() {
  const criteria = [
    {
      id: 1,
      title: "Product Innovation and Market Fit",
      score: 54,
      description:
        "The solution demonstrates potential but lacks clear differentiation in the market. While the core concept addresses a real need, the innovative aspects need stronger development and validation with target users.",
    },
    {
      id: 2,
      title: "Technical Feasibility",
      score: 57,
      description:
        "The technical implementation plan is generally sound but requires more detailed consideration of scalability and resource requirements. Key technical challenges have been identified but need more comprehensive solutions.",
    },
    {
      id: 3,
      title: "Business Model Viability",
      score: 61,
      description:
        "The business model shows promise with clear revenue streams identified. However, customer acquisition costs and long-term sustainability metrics need further refinement to ensure profitable growth.",
    },
    {
      id: 4,
      title: "Team Capability",
      score: 59,
      description:
        "The team demonstrates relevant experience but may benefit from additional expertise in key areas. Leadership roles and responsibilities are well-defined, though some critical skill gaps exist.",
    },
    {
      id: 5,
      title: "Market Opportunity",
      score: 63,
      description:
        "Strong market potential identified with clear growth opportunities. Market size and competitive analysis show promising indicators, though market entry strategy needs further development.",
    },
  ];

  const calculateOverallScore = () => {
    const total = criteria.reduce((acc, curr) => acc + curr.score, 0);
    return Math.round(total / criteria.length);
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Your Evaluation Report</h1>
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="h5">Overall Score:</span>
          <span className="display-4 text-primary">
            {calculateOverallScore()}
          </span>
        </div>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${calculateOverallScore()}%`,
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
              <Link to={`/evaluate/reasoning/${criterion.id}`}>
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
