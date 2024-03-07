import { apiCall } from "@/api/api";
import { TableEmpty, TableLoading } from "@/components/atoms/tables";
import { TableFilters } from "@/components/molecules/filters";
import { TableWrapper } from "@/components/molecules/wrappers";
import { Col, Row } from "antd";
import React from "react";
import { useState, useEffect } from "react";

const tableFilter = [
  "Date",
  "Name",
  "Booking Date",
  "Car Name",
  "Model",
  "Price",
  "Booking hours",
];

export const OrdersTable = () => {
  const [tableLoading, setTableLoading] = useState(true);
  const [orders, setOrders] = useState<any>([]);
  const [active, setActive] = useState(0);
  const getOrders = () => {
    apiCall("/Orders", "get")
      .then((res) => {
        setOrders([
          {
            date: "23-10-1996",
            name: "Olaitan Akinlade",
            bDate: "20-10-2024",
            cName: "20-10-2024",
            model: "2023",
            price: "NGN50,000.00",
            bHours: "20hrs",
          },
        ]);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setTableLoading(false);
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <TableWrapper>
      {tableLoading ? (
        <TableLoading />
      ) : orders.length === 0 ? (
        <TableEmpty />
      ) : (
        <>
          <TableFilters
            filterList={[
              "All bookings",
              "Available vehicles",
              "Booked vehicles",
              "Archive",
            ]}
            handleActive={setActive}
            active={active}
          />
          <Row>
            {tableFilter.map((item, index) => {
              return <Col key={index}></Col>;
            })}
          </Row>
        </>
      )}
    </TableWrapper>
  );
};
