import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SurveyProgress } from "./survey-progress";
import { useSurvey } from "../SurveyContext";
import "../App.css";

export default function InnovationFeasibility() {
  const { formData, setFormData } = useSurvey();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/team-organization");
  };

  return (
    <Container fluid className="bg-light">
      <Row>
        <SurveyProgress currentStep={3} />
        <Col md={8} className="p-4 ms-4">
          <Form
            onSubmit={handleSubmit}
            className="mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <Form.Group className="mt-4 mb-4">
              <Form.Label>What makes your product innovative?</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe your product's innovative aspects"
                value={formData.innovation}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    innovation: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mt-4 mb-4">
              <Form.Label>
                How feasible is your product in terms of technology, market
                demand, and execution?
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Explain the feasibility of your product"
                value={formData.feasibility}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    feasibility: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mt-4 mb-4">
              <Form.Label>
                What are the main challenges in developing and launching your
                product?
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="List the main challenges"
                value={formData.challenges}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    challenges: e.target.value,
                  })
                }
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Link to="/product-goal">
                <Button
                  type="submit"
                  className="float-end rounded-pill"
                  variant="secondary"
                  size="md"
                  style={{ width: "100px" }}
                >
                  Previous
                </Button>
              </Link>

              <Button
                type="submit"
                className="float-end rounded-pill moonshotButtonTeal"
                variant="primary"
                size="md"
                style={{ width: "80px" }}
              >
                Next
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
