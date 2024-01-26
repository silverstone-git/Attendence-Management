import React from "react";
import TableBlock from "./TableBlock";
import { heading, subjects } from "./data";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const TimeTable = ({ children, onClick }: Props) => {
  //   var percentage = Math.floor((present / total) * 100);
  return (
    <div className="border-2 border-transparent rounded-md py-6 px-3 bg-buttonBgBrown">
      <div className="flex flex-row justify-between">
        {heading.map((item, index) => {
          return (
            <div key={index} className={`flex flex-col`}>
              <TableBlock className="rounded-t-md">
                <h1 className="text-lg font-bold">{item}</h1>
              </TableBlock>
            </div>
          );
        })}
      </div>

      {subjects.map((item, index) => {
        return (
          <div key={index} className="flex flex-row justify-between">
            {item.map((subItem, subIndex) => {
              return (
                <div key={subIndex} className="flex flex-col">
                  <TableBlock
                    className={`${
                      subIndex != 0 ? "border-t-2 border-buttonBgBrown" : ""
                    } ${index == 4 ? "rounded-b-md" : " "} `}
                  >
                    {/* <h1>suject</h1> */}
                    <h1 className="text-base flex justify-center items-center">{subItem.title}</h1>
                    <h1 className="text-xs">{subItem.room}</h1>
                  </TableBlock>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TimeTable;
