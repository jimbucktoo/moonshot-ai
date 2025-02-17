import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { SurveyProgress } from "./survey-progress";
import { useSurvey } from "../SurveyContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function BusinessModel() {
  const { formData, setFormData } = useSurvey();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/partnerships-support");
  };

  return (
    <Container
      fluid
      className="bg-dark min-vh-100 d-flex flex-row justify-content-between"
    >
      <Col md={3} className="p-3">
        <SurveyProgress currentStep={5} />
      </Col>
      <Col md={9} className="p-4 mt-4">
        <Form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <Form.Group className="mb-3">
            <Form.Label>
              What is your revenue model? <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Describe your revenue model"
              required
              value={formData.revenueModel}
              onChange={(e) =>
                setFormData({ ...formData, revenueModel: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              What is your strategy for acquiring and retaining customers?{" "}
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Describe your customer acquisition and retention strategy"
              required
              value={formData.customerAcquisition}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  customerAcquisition: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              What is the size of your target market?{" "}
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Estimate your target market size"
              required
              value={formData.marketSize}
              onChange={(e) =>
                setFormData({ ...formData, marketSize: e.target.value })
              }
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Link to="/team-organization">
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
