import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useSurvey } from "../SurveyContext";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const { formData, setFormData } = useSurvey();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/report");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
