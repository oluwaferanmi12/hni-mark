import { Col, Row } from "antd";
import React from "react";

export const TableLoading = () => {
  return (
    <Row className="flex justify-center">
      <Col xs={24}>
        <div className="bg-hgrey50 flex justify-center items-center mx-4 rounded-lg h-[500px] my-4 max-h-[500px]">
          Loading....
        </div>
      </Col>
    </Row>
  );
};
