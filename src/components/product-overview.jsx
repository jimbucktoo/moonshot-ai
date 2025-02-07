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
import FormCheck from "react-bootstrap/FormCheck";

export default function ProductOverview() {
  const [formData, setFormData] = useState({
    summary: "",
    users: "",
    problem: "",
    stage: "",
    prototype: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container fluid className="min-vh-100 d-flex">
      <Col md={3} className="p-3">
        <SurveyProgress currentStep={1} />
      </Col>
      <Col md={9} className="p-4">
        <Form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <FormGroup className="mb-3">
            <FormLabel>
              Provide a one-line summary of your product{" "}
              <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              type="text"
              placeholder="Placeholder text"
              required
              value={formData.summary}
              onChange={(e) =>
                setFormData({ ...formData, summary: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel>
              Who are your users? How many users does the product serve now?{" "}
              <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              type="text"
              placeholder="Placeholder text"
              required
              value={formData.users}
              onChange={(e) =>
                setFormData({ ...formData, users: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel>
              What specific problem are you solving? How does it solve the
              problem for your users? <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              as="textarea"
              placeholder="Placeholder text"
              required
              value={formData.problem}
              onChange={(e) =>
                setFormData({ ...formData, problem: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel>
              What is your product stage now?{" "}
              <span className="text-danger">*</span>
            </FormLabel>
            <div>
              {[
                {
                  value: "ideation",
                  label:
                    "Ideation Stage - Pre-seed Stage, problem-solution fit, conduct market research, prototype and validate the idea",
                },
                {
                  value: "early",
                  label:
                    "Early stage - Seed Stage, Developing a Minimum Viable Product (MVP)",
                },
                {
                  value: "growth",
                  label:
                    "Growth Stage - Series A & B, achieve product-market fit",
                },
                {
                  value: "scale",
                  label:
                    "Scale stage - Series C and Beyond, Rapid scaling and expansion",
                },
              ].map((stage) => (
                <FormCheck
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
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel>
              Upload the link or file if there is a prototype or demo.
            </FormLabel>
            <FormControl
              type="text"
              placeholder="Placeholder text"
              value={formData.prototype}
              onChange={(e) =>
                setFormData({ ...formData, prototype: e.target.value })
              }
            />
          </FormGroup>

          <Link to="/product-goal">
            <Button
              type="submit"
              className="float-end"
              style={{ backgroundColor: "#0d6efd", borderColor: "#0d6efd" }}
            >
              Next
            </Button>
          </Link>
        </Form>
      </Col>
    </Container>
  );
}
