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
    <Container
      fluid
      className="bg-dark min-vh-100 d-flex flex-row justify-content-between"
    >
      <Col md={3} className="p-3">
        <SurveyProgress currentStep={3} />
      </Col>
      <Col md={9} className="p-4 mt-4">
        <Form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <Form.Group className="mb-3">
            <Form.Label>What makes your product innovative?</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Describe your product's innovative aspects"
              value={formData.innovation}
              onChange={(e) =>
                setFormData({ ...formData, innovation: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              How feasible is your product in terms of technology, market
              demand, and execution?
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Explain the feasibility of your product"
              value={formData.feasibility}
              onChange={(e) =>
                setFormData({ ...formData, feasibility: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              What are the main challenges in developing and launching your
              product?
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="List the main challenges"
              value={formData.challenges}
              onChange={(e) =>
                setFormData({ ...formData, challenges: e.target.value })
              }
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Link to="/product-goal">
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
