import { TableLoading } from "@/components/atoms/tables";
import { PatternCard, TransactionCard } from "@/components/molecules/cards";
import { TableWrapper } from "@/components/molecules/wrappers";
import { Col, Row } from "antd";
import React, { useState } from "react";

export const WalletTable = () => {
  const [tableLoading, setTableLoading] = useState(true);
  const [wallTransactions, setWallTransactions] = useState([]);
  return (
    <TableWrapper>
      <Row gutter={{ lg:20 }} className="mb-4">
        <Col xs={8}>
          <PatternCard label="Available Balance" moneyValue="NGN 200,000.00" />
        </Col>
        <Col xs={16}>
          <TransactionCard />
        </Col>
      </Row>
      {tableLoading ? <TableLoading /> : wallTransactions.length}
    </TableWrapper>
  );
};
