import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import Root from "./Routes";

import { Col, Row } from "reactstrap";
const Template = () => {
  return (
    <div>
      <header>
        <TopBar />
      </header>

      <Row>
        <Col md={4}>
          <Dashboard />
        </Col>

        <Col md={8}>
          <Root />
        </Col>
      </Row>
    </div>
  );
};

export default Template;
