import { apiCall } from "@/api/api";
import { TableLoading } from "@/components/atoms/tables";
import { PatternCard, TransactionCard } from "@/components/molecules/cards";
import { TableWrapper } from "@/components/molecules/wrappers";
import { walletType } from "@/types";
import { Col, Row } from "antd";
import { get } from "http";
import React, { useEffect, useState } from "react";

export const WalletTable = () => {
  const [tableLoading, setTableLoading] = useState(true);
  const [wallTransactions, setWallTransactions] = useState([]);
  const [walletDetails, setWalletDetails] = useState<walletType>();
  const [initDataLoaded, setinitDataLoaded] = useState(false);

  useEffect(() => {
    apiCall("Wallet", "get")
      .then((res) => {
        setWalletDetails(res?.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setinitDataLoaded(true);
      });
  }, []);
  return (
    <TableWrapper>
      <Row gutter={{ lg: 20 }} className="mb-4">
        <Col xs={8}>
          <PatternCard
            label="Available Balance"
            moneyValue={walletDetails?.amount ?? ""}
            loaded={initDataLoaded}
          />
        </Col>
        <Col xs={16}>
          <TransactionCard />
        </Col>
      </Row>
      {tableLoading ? <TableLoading /> : wallTransactions.length}
    </TableWrapper>
  );
};
