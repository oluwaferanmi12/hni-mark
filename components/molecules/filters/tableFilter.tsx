import React from "react";

export const TableFilters = ({
  filterList,
  handleActive,
  active,
}: {
  filterList: string[];
  handleActive: (val: number) => void;
  active: number;
}) => {
  return (
    <div >
      {filterList.map((item, index) => {
        return (
          <button
            onClick={() => {
              handleActive(index);
            }}
            className={`border-b ${
              active == index
                ? "border-b-4 border-[#030389] text-hblue500"
                : "border-[#F3F0EB] text-[#666563]"
            }  pb-3 px-4`}
            key={index}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
