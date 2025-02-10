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
      console.log(evaluationResponse.think_section);
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
              background: "linear-gradient(to right, #0d6efd, #ff0000)",
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
                      background: "linear-gradient(to right, #0d6efd, #ff0000)",
                    }}
                  />
                </div>
              </div>
              <h6>Improvement Suggestions:</h6>
              <p className="text-muted">{criterion.description}</p>
              <Link to={`/reasoning/${criterion.id}`}>
                <Button variant="outline-primary">Reasoning Analysis</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Reasoning Section with Proper Formatting */}
      {evaluationResponse.think_section && (
        <div className="mb-4 p-3 border rounded bg-light">
          <h5 className="text-primary">Chain-of-Thought Reasoning</h5>

          {(() => {
            // Match "Criteria X:" to split into sections while keeping the intro
            const matches = Array.from(
              evaluationResponse.think_section.matchAll(/(Criteria \d+:)/g)
            );

            if (matches.length === 0) {
              // No criteria found, just display the whole text as a paragraph
              return (
                <p className="text-muted">
                  {evaluationResponse.think_section.trim()}
                </p>
              );
            }

            const introText = evaluationResponse.think_section
              .slice(0, matches[0].index)
              .trim();
            const criteriaSections = matches.map((match, i) => {
              const start = match.index;
              const end = matches[i + 1]
                ? matches[i + 1].index
                : evaluationResponse.think_section.length;

              // Extract full criteria text
              const criteriaText = evaluationResponse.think_section
                .slice(start + match[1].length, end)
                .trim();

              // Check if the text contains a "Summary:"
              const summaryIndex = criteriaText.indexOf("Summary:");

              if (summaryIndex !== -1) {
                // Split main explanation and summary
                const explanation = criteriaText.slice(0, summaryIndex).trim();
                const summary = criteriaText.slice(summaryIndex).trim();

                return (
                  <React.Fragment key={`criteria-${i}`}>
                    <li>
                      <strong>{match[1]}</strong> {explanation}
                    </li>
                    <li>
                      <strong>{summary.split(":")[0]}:</strong>{" "}
                      {summary.split(":").slice(1).join(":").trim()}
                    </li>
                  </React.Fragment>
                );
              } else {
                // No summary found, push entire criteria text
                return (
                  <li key={`criteria-${i}`}>
                    <strong>{match[1]}</strong> {criteriaText}
                  </li>
                );
              }
            });

            return (
              <>
                {/* Display the intro as a paragraph */}
                <p className="text-muted">{introText}</p>
                {/* Display criteria and summaries as a bullet list */}
                <ul className="text-muted">{criteriaSections}</ul>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}
