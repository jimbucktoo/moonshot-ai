import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
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
    <Container
      fluid
      className="min-vh-100 d-flex flex-row justify-content-between"
    >
      <Col md={3} className="p-3">
        <SurveyProgress currentStep={1} />
      </Col>
      <Col md={9} className="p-4 mt-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              Can you provide a brief summary of your product?{" "}
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a brief description of your product"
              required
              value={formData.summary}
              onChange={(e) =>
                setFormData({ ...formData, summary: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Who are your target users, and how many are currently using the
              product? <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Describe your target users and current user base"
              required
              value={formData.users}
              onChange={(e) =>
                setFormData({ ...formData, users: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              What specific problem does your product solve, and how does it
              address this issue for users?{" "}
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Explain the problem your product addresses and how it provides a solution"
              required
              value={formData.problem}
              onChange={(e) =>
                setFormData({ ...formData, problem: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              What stage of development is your product in?{" "}
              <span className="text-danger">*</span>
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
                    setFormData({ ...formData, stage: e.target.value })
                  }
                />
              ))}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Do you have a prototype or demo? If so, please share the link or
              file:
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Provide a link to your prototype or demo"
              value={formData.prototype}
              onChange={(e) =>
                setFormData({ ...formData, prototype: e.target.value })
              }
            />
          </Form.Group>

          <Button
            type="submit"
            className="float-end"
            variant="primary"
            size="md"
          >
            Next
          </Button>
        </Form>
      </Col>
    </Container>
  );
}
