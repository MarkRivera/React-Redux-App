import React from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = (props) => {
  return (
    <Row className="text-center">
      <Col>
        <h1>{props.title}</h1>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.title,
  };
};

export default connect(mapStateToProps, {})(Header);
