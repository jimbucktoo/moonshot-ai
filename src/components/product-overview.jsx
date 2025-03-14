import { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { SurveyProgress } from "./survey-progress";
import { useSurvey } from "../SurveyContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function ProductOverview() {
  const { formData, setFormData } = useSurvey();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/product-goal");
  };

  return (
    <Container fluid className="bg-light">
      <Row>
        <SurveyProgress currentStep={1} />
        <Col md={8} className="p-4 ms-4">
          <Form
            onSubmit={handleSubmit}
            className="mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <Form.Group className="mt-4 mb-4">
              <Form.Label>
                Can you provide a brief summary of your product?
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter a brief description of your product"
                value={formData.summary}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    summary: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mt-4 mb-4">
              <Form.Label>
                Who are your target users, and how many are currently using the
                product?
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe your target users and current user base"
                value={formData.users}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    users: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mt-4 mb-4">
              <Form.Label>
                What specific problem does your product solve, and how does it
                address this issue for users?
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Explain the problem your product addresses and how it provides a solution"
                value={formData.problem}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    problem: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mt-4 mb-4">
              <Form.Label>
                What stage of development is your product in?
              </Form.Label>
              <div>
                {[
                  {
                    value:
                      "Ideation Stage (Pre-Seed Stage): Defining the problem-solution fit, conducting market research, prototyping, and validating the idea.",
                    label:
                      "Ideation Stage (Pre-Seed Stage): Defining the problem-solution fit, conducting market research, prototyping, and validating the idea.",
                  },
                  {
                    value:
                      "Early Stage (Seed Stage): Developing a Minimum Viable Product (MVP) and preparing for initial launch.",
                    label:
                      "Early Stage (Seed Stage): Developing a Minimum Viable Product (MVP) and preparing for initial launch.",
                  },
                  {
                    value:
                      "Growth Stage (Series A & B): Achieved product-market fit, scaling operations, and expanding customer adoption.",
                    label:
                      "Growth Stage (Series A & B): Achieved product-market fit, scaling operations, and expanding customer adoption.",
                  },
                  {
                    value:
                      "Scale Stage (Series C and Beyond): Rapid scaling, market expansion, and organizational growth.",
                    label:
                      "Scale Stage (Series C and Beyond): Rapid scaling, market expansion, and organizational growth.",
                  },
                ].map((stage) => (
                  <Form.Check
                    key={stage.value}
                    type="radio"
                    name="stage"
                    id={stage.value}
                    label={stage.label}
                    value={stage.value}
                    checked={formData.stage === stage.value}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stage: e.target.value,
                      })
                    }
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mt-4 mb-4">
              <Form.Label>
                Do you have a prototype or demo? If so, please share the link:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Provide a link to your prototype or demo"
                value={formData.prototype}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    prototype: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Button
              type="submit"
              className="float-end rounded-pill moonshotButtonTeal"
              variant="primary"
              size="md"
              style={{ width: "80px" }}
            >
              Next
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
