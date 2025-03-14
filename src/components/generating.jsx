import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import Image2 from "../assets/image2.png";
import "../App.css";

export default function Generating() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/novelty-score");
    }, 30000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="moonshotBgTeal d-flex min-vh-100 align-items-center justify-content-center">
      <Card className="p-4 text-center shadow" style={{ maxWidth: "500px" }}>
        <Card.Body className="d-flex flex-column align-items-center text-center">
          <h1 className="moonshotTeal mb-4">Generating Your Novelty Score</h1>
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
          <p className="text-secondary mb-4">
            Evaluating your idea with deep research technology.
            <br />
            Hold on while we analyze its uniqueness and innovation.
          </p>
          <img src={Image2} alt="Moonshot Man" height={300} />
        </Card.Body>
      </Card>
    </div>
  );
}
