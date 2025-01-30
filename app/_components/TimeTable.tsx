import React from "react";
import TableBlock from "./TableBlock";
import { columnHeading, rowHeading, onlySubjects } from "./data";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const TimeTable = ({ children, onClick }: Props) => {
  //   var percentage = Math.floor((present / total) * 100);
  return (
    <div>
      {/* Table 1 */}
      <div className="border-2 border-transparent flex gap-[7px] rounded-md py-6 px-3 bg-buttonBgBrown">
        <div className="flex flex-col bg-blockBg justify-between rounded-md">
          {rowHeading.map((item, index) => {
            return (
              <div key={index} className={`flex flex-col`}>
                <TableBlock
                  dropdown={false}
                  className={`${index == 0 ? "rounded-t-md" : ""} ${
                    index == 5 ? "rounded-b-md" : ""
                  } border-blockBg`}
                >
                  <h1 className="text-lg font-bold">{item}</h1>
                </TableBlock>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row gap-[7px]">
            {columnHeading.map((item, index) => {
              return (
                <div key={index} className="flex flex-row">
                  <TableBlock dropdown={false} className="rounded-t-md">
                    <h1 className="text-lg font-bold">{item}</h1>
                  </TableBlock>
                </div>
              );
            })}
          </div>

          <div>
            {onlySubjects.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row border-t- border-buttonBgBrown justify-between"
                >
                  {item.map((subItem, subIndex) => {
                    return (
                      <div key={subIndex} className="flex flex-col">
                        <TableBlock
                          dropdown={true}
                          className={`${
                            subIndex != -1
                              ? "border-t-2 border-buttonBgBrown"
                              : ""
                          } ${index == 4 ? "rounded-b-md" : " "}
                          ${subItem.status == "0" ? "bg-yellow-500" : ""}
                          ${subItem.status == "1" ? "bg-green-500" : ""}
                          ${subItem.status == "2" ? "bg-red-500" : ""}`}
                        >
                          {/* <h1>suject</h1> */}
                          <h1 className="text-base flex justify-center items-center">
                            {subItem.title}
                          </h1>
                          <h1 className="text-xs">{subItem.room}</h1>
                        </TableBlock>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;

// rounded-t-md
// ${
//   subIndex != 0
//     ? "border-t-2 border-buttonBgBrown"
//     : ""
// } ${index == 4 ? "rounded-b-md" : " "}

{
  /* Table 2 */
}
{
  /* <div className="border-2 border-transparent rounded-md py-6 px-3 bg-buttonBgBrown">
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
              {/* <h1>suject</h1> */
}
//               <h1 className="text-base flex justify-center items-center">
//                 {subItem.title}
//               </h1>
//               <h1 className="text-xs">{subItem.room}</h1>
//             </TableBlock>
//           </div>
//         );
//       })}
//     </div>
//   );
// })}
// </div> */}
