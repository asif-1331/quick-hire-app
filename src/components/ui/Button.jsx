import React from "react";

const Button = ({ className, children, showBgColor = true, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`${className} font-sans font-bold border border-transparent text-base cursor-pointer hover:opacity-85 transition-all duration-200 ease-in inline-flex px-6 py-3 ${showBgColor ? "bg-primary text-white" : "bg-transparent text-primary"}`}
    >
      {children}
    </div>
  );
};

export default Button;
