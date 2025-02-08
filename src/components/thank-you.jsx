import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useSurvey } from "../SurveyContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ThankYou() {
  const { formData, setFormData } = useSurvey();
  const navigate = useNavigate();

  const [proposal, setProposal] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const updatedObject = replaceKeys(formData, keyMap);

  const stringData = JSON.stringify(updatedObject);
  setProposal(stringData);
  console.log(stringData);
  //handleEvaluate();

  const handleEvaluate = async () => {
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await axios.post("http://localhost:5000/evaluate", {
        proposal: proposal,
      });

      setResponse(res.data);
    } catch (err) {
      setError("Error evaluating startup proposal. Please try again.");
    } finally {
      setLoading(false);
      navigate("/report");
    }
  };

  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/report");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
  */

  return (
    <div className="d-flex min-vh-100 bg-light align-items-center justify-content-center">
      <Card className="p-4 text-center shadow" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <h1 className="text-primary mb-3">Thank You!</h1>
          <p className="text-secondary mb-4">
            We're analyzing your responses and generating your startup
            evaluation report...
          </p>
          <Spinner animation="border" variant="primary" role="status" />
        </Card.Body>
      </Card>
    </div>
  );
}
