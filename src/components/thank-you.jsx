import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useSurvey } from "../SurveyContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Image3 from "../assets/image3.png";
import "../App.css";

export default function ThankYou() {
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
    customerAcquisition: "How do you plan to acquire and retain customers?",
    experience: "What relevant experience does your team have?",
    feasibility: "How feasible is your product?",
    funding: "How much funding do you need and how do you plan to use it?",
    goal: "What is the goal of your product?",
    innovation: "How is your product innovative?",
    marketSize: "What is the size of your target market?",
    milestones: "What are the key milestones in your plan?",
    partnerships:
      "Do you have any strategic partnerships? If so, describe them.",
    plan: "What is your plan to achieve this goal?",
    problem:
      "What specific problem are you solving? How does it solve the problem for your users?",
    prototype: "Upload the link or file if there is a prototype or demo.",
    revenueModel: "What is your revenue model?",
    roles: "What are their roles and responsibilities?",
    stage: "What is your product stage now?",
    summary: "Provide a one-line summary of your product.",
    support: "What kind of support do you need to succeed?",
    teamMembers: "Who are the key members of your team?",
    users: "Who are your users? How many users does the product serve now?",
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
    <div className="d-flex min-vh-100 bg-dark align-items-center justify-content-center">
      <Card className="p-4 text-center shadow" style={{ maxWidth: "500px" }}>
        <Card.Body className="d-flex flex-column align-items-center text-center">
          <h1 className="moonshotBlue mb-4">
            Generating Your Evaluation Report
          </h1>
          {loading && (
            <Spinner
              className="mb-4"
              animation="border"
              variant="primary"
              role="status"
            />
          )}
          {error && <p className="text-danger">{error}</p>}
          <p className="text-secondary mb-4">
            We're processing your responses to create valuable insights for you!
            This may take a few minutes.
          </p>
          <img src={Image3} alt="Startup illustration" height={300} />
        </Card.Body>
      </Card>
    </div>
  );
}
