import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { SurveyProgress } from "./survey-progress";
import { useSurvey } from "../SurveyContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function ProductGoal() {
  const { formData, setFormData } = useSurvey();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/innovation-feasibility");
  };

  return (
    <Container fluid className="bg-light">
      <Row>
        <SurveyProgress currentStep={2} />
        <Col md={8} className="p-4 ms-4">
          <Form
            onSubmit={handleSubmit}
            className="mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <Form.Group className="mt-4 mb-4">
              <Form.Label>What is the primary goal of your product?</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe your product's main goal"
                value={formData.goal}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    goal: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mt-4 mb-4">
              <Form.Label>How do you plan to achieve this goal?</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Outline your plan"
                value={formData.plan}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    plan: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mt-4 mb-4">
              <Form.Label>
                What are the key milestones in your roadmap?
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="List your key milestones"
                value={formData.milestones}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    milestones: e.target.value,
                  })
                }
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Link to="/product-overview">
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
