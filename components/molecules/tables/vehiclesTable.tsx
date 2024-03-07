import { apiCall } from "@/api/api";
import { SearchInput } from "@/components/atoms/inputs";
import { TableEmpty, TableLoading } from "@/components/atoms/tables";
import { TableFilters } from "@/components/molecules/filters";
import { TableWrapper } from "@/components/molecules/wrappers";
import { Col, Row } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import arrowRight from "@/public/assets/svgs/arrowRight.svg";
import arrowLeft from "@/public/assets/svgs/arrowLeft.svg";
import reloadButton from "@/public/assets/svgs/reload.svg";
import Image from "next/image";
import threeDots from "@/public/assets/svgs/tdots.svg";



const tableFilter = [
  { heading: "Date", size: 3 },
  { heading: "Name", size: 3 },
  { heading: "Booking Date", size: 3 },
  { heading: "Car Name", size: 3 },
  { heading: "Model", size: 3 },
  { heading: "Price", size: 3 },
  { heading: "Booking hours", size: 3 },
  { heading: "", size: 3 },
];

interface OrdersType {
  date: string;
  name: string;
  bDate: string;
  cName: string;
  model: string;
  price: string;
  bHours: string;
}


export const VehiclesTable = () => {
  const [tableLoading, setTableLoading] = useState(true);
  const [orders, setOrders] = useState<OrdersType[]>([]);
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
          <div
            className="my-6 flex justify-between
           items-center"
          >
            <SearchInput />
            <div className="flex items-center gap-4 text-[#475467]">
              <span>
                <Image src={reloadButton} alt="" />
              </span>
              <span>1 - 50 of 2,500</span>
              <span className="flex items-center gap-4">
                <span>
                  <Image src={arrowLeft} alt="" />
                </span>
                <span>1 - 10</span>
                <span>
                  <Image src={arrowRight} alt="" />
                </span>
              </span>
            </div>
          </div>
          <Row className="bg-[#FCFCFD] py-4 px-3">
            {tableFilter.map((item, index) => {
              return (
                <Col xs={item.size} key={index}>
                  <span className="text-[#667085] text-sm font-semibold">
                    {item.heading}
                  </span>
                </Col>
              );
            })}
          </Row>
          {/* //TODO: We need two table states (Empty and filled states) , the one */}
          {/* for showing all data and another to filter by date or status */}
          <div>
            {orders.map((item, index) => {
              return (
                <Row className="py-4 px-3 text-[#475467]">
                  <Col xs={tableFilter[0].size}>
                    <span>{item.date}</span>
                  </Col>
                  <Col xs={tableFilter[1].size}>
                    <span>{item.name}</span>
                  </Col>
                  <Col xs={tableFilter[2].size}>
                    <span>{item.bDate}</span>
                  </Col>{" "}
                  <Col xs={tableFilter[3].size}>
                    <span>{item.cName}</span>
                  </Col>{" "}
                  <Col xs={tableFilter[4].size}>
                    <span>{item.model}</span>
                  </Col>{" "}
                  <Col xs={tableFilter[5].size}>
                    <span>{item.price}</span>
                  </Col>{" "}
                  <Col xs={tableFilter[6].size}>
                    <span>{item.bHours}</span>
                  </Col>{" "}
                  <Col xs={tableFilter[7].size}>
                    <span>
                      <Image src={threeDots} alt="" />
                    </span>
                  </Col>{" "}
                </Row>
              );
            })}
          </div>
        </>
      )}
    </TableWrapper>
  );
};
