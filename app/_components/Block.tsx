import React from "react";

interface Props {
  children?: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  subject: string;
  present: number;
  total: number;
  onClick?: () => void;
}

const Block = ({
  children,
  primary,
  onClick,
  subject,
  present,
  total,
}: Props) => {
  var percentage = Math.floor((present / total) * 100);
  return (
    <div
      className={`w-full sm:w-1/3 md:w-1/5 lg:w-1/6 h-56  lg:h-56 overflow-hidden border-2 border-transparent text-lg ${
        primary ? "bg-buttonBgGreen  text-black" : "bg-buttonBgBrown"
      }
      rounded-[4px] p-3 m-2 h-48 w-96 md:h-48 md:w-48 justify-between flex flex-col`}
    >
      <h1 className=" font-semibold">{subject}</h1>
      <div className="flex flex-col items-end">
        <h1 className="text-3xl font-semibold">{percentage}%</h1>
        <h1>
          {present}/{total}
        </h1>
      </div>
      {/* loading bar */}
    </div>
  );
};

export default Block;
