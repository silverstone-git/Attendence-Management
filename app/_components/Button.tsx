import React from "react";

interface Props {
  children?: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
}

const Button = ({ children, primary, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`hidden sm:block border-2 border-transparent text-base ${
        primary ? "bg-buttonBgBrown " : "bg-buttonBgGreen text-black"
      }
     w-[173px] h-[48px] rounded-[4px]`}
    >
      {children}
    </button>
  );
};

export default Button;
