import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form as BSForm } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getJobs } from "../../actions";

const Form = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    city: "",
  });

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.getJobs(userInput);
  };

  return (
    <BSForm>
      <Row className="mb-3">
        <Col>
          <BSForm.Control
            placeholder="Job Title"
            onChange={handleChange}
            name="title"
            value={userInput.title}
            autoComplete="off"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <BSForm.Control
            placeholder="City"
            onChange={handleChange}
            name="city"
            value={userInput.city}
            autoComplete="off"
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <Button
            variant="primary"
            className="align-self-center"
            onClick={handleClick}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </BSForm>
  );
};

export default connect(null, { getJobs })(Form);
