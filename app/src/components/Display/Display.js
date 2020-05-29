import React from "react";
import Row from "react-bootstrap/Row";
import Job from "./Job";
import { connect } from "react-redux";

const Display = (props) => {
  return (
    <Row className="justify-content-space-between" xs={1} sm={2}>
      {props.jobs.length
        ? props.jobs.map((job) => <Job key={job.id} job={job} />)
        : null}
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
  };
};

export default connect(mapStateToProps, {})(Display);
