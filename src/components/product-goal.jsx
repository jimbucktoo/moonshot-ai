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
    <Container
      fluid
      className="bg-dark min-vh-100 d-flex flex-row justify-content-between"
    >
      <Col md={3} className="p-3">
        <SurveyProgress currentStep={2} />
      </Col>
      <Col md={9} className="p-4 mt-4">
        <Form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <Form.Group className="mb-3">
            <Form.Label>What is the primary goal of your product?</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Describe your product's main goal"
              value={formData.goal}
              onChange={(e) =>
                setFormData({ ...formData, goal: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>How do you plan to achieve this goal?</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Outline your plan"
              value={formData.plan}
              onChange={(e) =>
                setFormData({ ...formData, plan: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              What are the key milestones in your roadmap?
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="List your key milestones"
              value={formData.milestones}
              onChange={(e) =>
                setFormData({ ...formData, milestones: e.target.value })
              }
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Link to="/product-overview">
              <Button variant="primary" size="md">
                Previous
              </Button>
            </Link>

            <Button type="submit" variant="primary" size="md">
              Next
            </Button>
          </div>
        </Form>
      </Col>
    </Container>
  );
}
