import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { SurveyProgress } from "./survey-progress";
import { useSurvey } from "../SurveyContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function TeamOrganization() {
  const { formData, setFormData } = useSurvey();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/business-model");
  };

  return (
    <Container
      fluid
      className="bg-dark min-vh-100 d-flex flex-row justify-content-between"
    >
      <Col md={3} className="p-3">
        <SurveyProgress currentStep={4} />
      </Col>
      <Col md={9} className="p-4 mt-4">
        <Form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Who are the key members of your team?</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="List your key team members"
              value={formData.teamMembers}
              onChange={(e) =>
                setFormData({ ...formData, teamMembers: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              What are their primary roles and responsibilities in the project?
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Describe roles and responsibilities"
              value={formData.roles}
              onChange={(e) =>
                setFormData({ ...formData, roles: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              What relevant experience does your team bring to this project?
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Describe your team's relevant experience"
              value={formData.experience}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Link to="/innovation-feasibility">
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
