import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { SurveyProgress } from "./survey-progress";

export default function ProductGoal() {
  const [formData, setFormData] = useState({
    goal: "",
    plan: "",
    milestones: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container fluid className="min-vh-100 d-flex">
      <Col md={3} className="p-3">
        <SurveyProgress currentStep={2} />
      </Col>
      <Col md={9} className="p-4">
        <Form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <FormGroup className="mb-3">
            <FormLabel>
              What is the goal of your product?{" "}
              <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              as="textarea"
              placeholder="Describe your product's main goal"
              required
              value={formData.goal}
              onChange={(e) =>
                setFormData({ ...formData, goal: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel>
              What is your plan to achieve this goal?{" "}
              <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              as="textarea"
              placeholder="Outline your plan"
              required
              value={formData.plan}
              onChange={(e) =>
                setFormData({ ...formData, plan: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel>
              What are the key milestones in your plan?{" "}
              <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              as="textarea"
              placeholder="List your key milestones"
              required
              value={formData.milestones}
              onChange={(e) =>
                setFormData({ ...formData, milestones: e.target.value })
              }
            />
          </FormGroup>

          <div className="d-flex justify-content-between">
            <Link to="/product-overview">
              <Button
                variant="primary"
                onClick={() => router.push("/evaluate/product-overview")}
              >
                Previous
              </Button>
            </Link>

            <Link to="/business-model">
              <Button
                type="submit"
                style={{ backgroundColor: "#0d6efd", borderColor: "#0d6efd" }}
              >
                Next
              </Button>
            </Link>
          </div>
        </Form>
      </Col>
    </Container>
  );
}
