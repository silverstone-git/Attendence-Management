import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  dropdown?: boolean;
}

const TableBlock = ({ children, onClick, className, dropdown }: Props) => {
  return (
    <div
      className={`text-black font-semibold h-[80px] w-[90px] flex flex-col justify-center items-center bg-blockBg  
      ${className} ${dropdown ? "hover:cursor-pointer" : ""} 
    `}
    >
      {children}
    </div>
  );
};

export default TableBlock;
