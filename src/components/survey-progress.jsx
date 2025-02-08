import { ProgressBar, ListGroup, Card } from "react-bootstrap";
import "../App.css";

export function SurveyProgress({ currentStep }) {
  const steps = [
    { id: 1, name: "Product Overview" },
    { id: 2, name: "Product Goal & Plan" },
    { id: 3, name: "Innovation & Feasibility" },
    { id: 4, name: "Team & Organization" },
    { id: 5, name: "Business Model" },
    { id: 6, name: "Partnerships & Support" },
  ];

  return (
    <Card className="p-3 bg-white border-0" style={{ width: "280px" }}>
      <Card.Body>
        <Card.Title className="text-center fw-bold mb-3 text-primary">
          Analyze Your Startup Potential
        </Card.Title>

        <ListGroup variant="flush" className="border-0">
          {steps.map((step) => (
            <ListGroup.Item
              key={step.id}
              className="d-flex align-items-center py-2 px-3 border-0 bg-transparent"
            >
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor:
                    step.id < currentStep
                      ? "#0d6efd"
                      : step.id === currentStep
                        ? "#0d6efd"
                        : "white",
                  color:
                    step.id < currentStep || step.id === currentStep
                      ? "white"
                      : "black",
                  fontWeight: "bold",
                }}
              >
                {step.id < currentStep ? "✓" : step.id}
              </div>
              <span
                className={`fw-semibold ms-3 ${step.id <= currentStep ? "text-dark" : "text-muted"}`}
              >
                {step.name}
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <ProgressBar
          now={(currentStep / steps.length) * 100}
          variant="primary"
          className="mt-3 border-0"
          animated
        />
      </Card.Body>
    </Card>
  );
}
