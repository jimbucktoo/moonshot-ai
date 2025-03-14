import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useSurvey } from "../SurveyContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Image2 from "../assets/image2.png";
import "../App.css";

export default function Evaluating() {
  const { formData, setEvaluationResponse } = useSurvey();
  const navigate = useNavigate();

  const [proposal, setProposal] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [evaluationSent, setEvaluationSent] = useState(false);

  function replaceKeys(obj, keyMap) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [keyMap[key] || key, value])
    );
  }

  const keyMap = {
    challenges:
      "What are the main challenges in developing and launching your product?",
    customerAcquisition:
      "What is your strategy for acquiring and retaining customers?",
    experience:
      "What relevant experience does your team bring to this project?",
    feasibility:
      "How feasible is your product in terms of technology, market demand, and execution?",
    funding: "How much funding do you need, and how will you allocate it?",
    goal: "What is the primary goal of your product?",
    innovation: "What makes your product innovative?",
    marketSize: "What is the size of your target market?",
    milestones: "What are the key milestones in your roadmap?",
    partnerships:
      "Do you have any strategic partnerships? If so, how do they contribute to your success?",
    plan: "How do you plan to achieve this goal?",
    problem:
      "What specific problem does your product solve, and how does it address this issue for users?",
    prototype:
      "Do you have a prototype or demo? If so, please share the link or file.",
    revenueModel: "What is your revenue model?",
    roles: "What are their primary roles and responsibilities in the project?",
    stage: "What stage of development is your product in?",
    summary: "Can you provide a brief summary of your product?",
    support: "What support do you need to achieve your goals?",
    teamMembers: "Who are the key members of your team?",
    users:
      "Who are your target users, and how many are currently using the product?",
  };

  useEffect(() => {
    const updatedObject = replaceKeys(formData, keyMap);
    const stringData = JSON.stringify(updatedObject);
    setProposal(stringData);
  }, [formData]);

  const handleEvaluate = async () => {
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await axios.post(
        "https://moonshot-ai-api.onrender.com/evaluate",
        { proposal }
      );

      console.log(res.data);
      setResponse(res.data);
      setEvaluationResponse(res.data);
    } catch (err) {
      setError("Error evaluating startup proposal. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Updated proposal:", proposal);
    if (proposal && !evaluationSent) {
      setEvaluationSent(true);
      handleEvaluate();
    }
  }, [proposal]);

  useEffect(() => {
    if (response) {
      navigate("/report");
    }
  }, [response]);

  return (
    <div className="moonshotBgTeal d-flex min-vh-100 align-items-center justify-content-center">
      <Card className="p-4 text-center shadow" style={{ maxWidth: "500px" }}>
        <Card.Body className="d-flex flex-column align-items-center text-center">
          <h1 className="moonshotTeal mb-4">
            Generating Your Evaluation Report
          </h1>
          {loading && (
            <div>
              <Spinner
                className="mx-2 mb-4 moonshotBgTeal"
                animation="grow"
                variant="primary"
                role="status"
              />
              <Spinner
                className="mx-2 mb-4 moonshotBgTeal"
                animation="grow"
                variant="primary"
                role="status"
              />
              <Spinner
                className="mx-2 mb-4 moonshotBgTeal"
                animation="grow"
                variant="primary"
                role="status"
              />
              <Spinner
                className="mx-2 mb-4 moonshotBgTeal"
                animation="grow"
                variant="primary"
                role="status"
              />
              <Spinner
                className="mx-2 mb-4 moonshotBgTeal"
                animation="grow"
                variant="primary"
                role="status"
              />
            </div>
          )}
          {error && <p className="text-danger">{error}</p>}
          <p className="text-secondary mb-4">
            Analyzing your idea with advanced AI algorithms.
            <br />
            This may take a moment as we dive deep into the details.
          </p>
          <img src={Image2} alt="Moonshot Man" height={300} />
        </Card.Body>
      </Card>
    </div>
  );
}
