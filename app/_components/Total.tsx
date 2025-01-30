import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Block = ({ children, onClick }: Props) => {
  //   var percentage = Math.floor((present / total) * 100);
  var taarik = new Date();
  var date = taarik.getDate();
  var month = taarik.toLocaleString("default", { month: "short" });
  var year = taarik.getFullYear();

  return (
    <div className="flex flex-col gap-6 md:flex-row font-extrabold text-3xl sm:text-3xl md:text-6xl lg:text-6xl justify-between items-center border-2 rounded-lg border-transparent bg-buttonBgBrown px-16 py-10">
      <div className="flex flex-col">
        Till
        <div className="flex flex-row sm:flex-col items-end sm:items-start">
          <h1 className="">
            {date} {month}
          </h1>
          <h1>{year}</h1>
        </div>
      </div>
      <div>pie chart</div>
      <div className="flex flex-col items-center">
        Total
        <div className="flex flex-row sm:flex-col items-end">
          <h1 className="text-5xl sm:text-8xl">80%</h1>
          <h1 className="text-xl sm:text-4xl">200/240</h1>
        </div>
      </div>
    </div>
  );
};

export default Block;
