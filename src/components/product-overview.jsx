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
              Provide a one-line summary of your product.{" "}
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
              Who are your users? How many users does the product serve now?{" "}
              <span className="text-danger">*</span>
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
              What specific problem are you solving? How does it solve the
              problem for your users? <span className="text-danger">*</span>
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
              What is your product stage now?{" "}
              <span className="text-danger">*</span>
            </Form.Label>
            <div>
              {[
                {
                  value:
                    "Ideation Stage - Pre-seed Stage, Problem-solution fit, Conducting market research, Prototyping and validating the idea",
                  label:
                    "Ideation Stage - Pre-seed Stage, Problem-solution fit, Conducting market research, Prototyping and validating the idea",
                },
                {
                  value:
                    "Early Stage - Seed Stage, Developing a Minimum Viable Product (MVP)",
                  label:
                    "Early Stage - Seed Stage, Developing a Minimum Viable Product (MVP)",
                },
                {
                  value:
                    "Growth Stage - Series A & B, Achieved product-market fit",
                  label:
                    "Growth Stage - Series A & B, Achieved product-market fit",
                },
                {
                  value:
                    "Scale Stage - Series C and Beyond, Rapid scaling and expansion",
                  label:
                    "Scale Stage - Series C and Beyond, Rapid scaling and expansion",
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
              Upload the link or file if there is a prototype or demo.
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
