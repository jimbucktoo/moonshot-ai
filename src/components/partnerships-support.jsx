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
    navigate("/evaluating");
  };

  return (
    <Container fluid className="bg-light">
      <Row>
        <SurveyProgress currentStep={6} />
        <Col md={8} className="p-4 ms-4">
          <Form
            onSubmit={handleSubmit}
            className="mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <Form.Group className="mt-4 mb-4">
              <Form.Label>
                Do you have any strategic partnerships? If so, how do they
                contribute to your success?
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe your partnerships and their contributions"
                value={formData.partnerships}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    partnerships: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mt-4 mb-4">
              <Form.Label>
                What support do you need to achieve your goals?
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe the support you need"
                value={formData.support}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    support: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mt-4 mb-4">
              <Form.Label>
                How much funding do you need, and how will you allocate it?
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe your funding needs and plans for allocation"
                value={formData.funding}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    funding: e.target.value,
                  })
                }
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Link to="/business-model">
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
                style={{ width: "90px" }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
