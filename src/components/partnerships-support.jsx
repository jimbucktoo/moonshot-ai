import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { SurveyProgress } from "./survey-progress";
import { useSurvey } from "../SurveyContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function PartnershipsSupport() {
  const { formData, setFormData } = useSurvey();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/thank-you");
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex flex-row justify-content-between"
    >
      <Col md={3} className="p-3">
        <SurveyProgress currentStep={6} />
      </Col>
      <Col md={9} className="p-4 mt-4">
        <Form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <Form.Group className="mb-3">
            <Form.Label>
              Do you have any strategic partnerships? If so, how do they
              contribute to your success? <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Describe your partnerships and their contributions"
              required
              value={formData.partnerships}
              onChange={(e) =>
                setFormData({ ...formData, partnerships: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              What support do you need to achieve your goals?{" "}
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Describe the support you need"
              required
              value={formData.support}
              onChange={(e) =>
                setFormData({ ...formData, support: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              How much funding do you need, and how will you allocate it?{" "}
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Describe your funding needs and plans for allocation"
              required
              value={formData.funding}
              onChange={(e) =>
                setFormData({ ...formData, funding: e.target.value })
              }
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Link to="/business-model">
              <Button variant="primary" size="md">
                Previous
              </Button>
            </Link>

            <Button type="submit" variant="primary" size="md">
              Submit
            </Button>
          </div>
        </Form>
      </Col>
    </Container>
  );
}
