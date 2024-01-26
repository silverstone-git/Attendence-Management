import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const TableBlock = ({ children, onClick, className }: Props) => {
  return (
    <div
      className={`text-black font-semibold h-[80px] w-[90px] flex flex-col justify-center items-center bg-blockBg  
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default TableBlock;
