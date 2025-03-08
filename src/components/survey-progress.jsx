import { ProgressBar, ListGroup, Card } from "react-bootstrap";
import Image4 from "../assets/image4.png";
import "../App.css";

export function SurveyProgress({ currentStep }) {
  const steps = [
    { id: 1, name: "Product Overview" },
    { id: 2, name: "Product Goal" },
    { id: 3, name: "Innovation & Feasibility" },
    { id: 4, name: "Team & Organization" },
    { id: 5, name: "Business Model" },
    { id: 6, name: "Partnerships & Support" },
  ];

  return (
    <Card
      className="p-4 moonshotBgWhite border-0"
      style={{ width: "360px", height: "100vh", borderRadius: "0" }}
    >
      <Card.Body className="align-items-center text-center">
        <Card.Title className="text-center fw-bold mb-3 text-primary">
          <h3>
            <b>Analyze Your Startup Potential</b>
          </h3>
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
                className={`fw-semibold ms-3 w-100 text-center ${
                  step.id <= currentStep ? "text-dark" : "text-muted"
                }`}
              >
                {step.name}
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <img className="mt-4" src={Image4} alt="Moonshot Man" height={300} />
      </Card.Body>
    </Card>
  );
}
