import React from "react";
import stripHtml from "string-strip-html";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Job = (props) => {
  return (
    <Col>
      <Card style={{ minHeight: "337px" }} className="my-3">
        <Card.Img variant="top" src={props.job.company_logo} />
        <Card.Body>
          <Card.Title>{props.job.title}</Card.Title>
          <Card.Text>
            {`${stripHtml(props.job.description.slice(0, 99))}...`}
          </Card.Text>
          <Card.Link href={stripHtml(props.job.how_to_apply)}>
            See more
          </Card.Link>
          <Card.Link href={props.job.url}>Apply</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Job;
