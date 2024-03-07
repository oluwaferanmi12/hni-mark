import { Col, Row } from "antd";
import React from "react";

export const TableEmpty = () => {
  return (
    <Row className="flex justify-center">
      <Col xs={24}>
        <div className="bg-hgrey50 flex justify-center items-center rounded-lg h-[500px]  max-h-[500px]">
          No Data found
        </div>
      </Col>
    </Row>
  );
};
