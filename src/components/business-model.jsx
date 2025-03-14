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
    <Container fluid className="bg-light">
      <Row>
        <SurveyProgress currentStep={5} />
        <Col md={8} className="p-4 ms-4">
          <Form
            onSubmit={handleSubmit}
            className="mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <Form.Group className="mt-4 mb-4">
              <Form.Label>What is your revenue model?</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe your revenue model"
                value={formData.revenueModel}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    revenueModel: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mt-4 mb-4">
              <Form.Label>
                What is your strategy for acquiring and retaining customers?
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe your customer acquisition and retention strategy"
                value={formData.customerAcquisition}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    customerAcquisition: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mt-4 mb-4">
              <Form.Label>What is the size of your target market?</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Estimate your target market size"
                value={formData.marketSize}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    marketSize: e.target.value,
                  })
                }
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Link to="/team-organization">
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
