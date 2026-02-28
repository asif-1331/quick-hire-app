import React from "react";

const Input = ({ className, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full px-4 py-3 
          text-body-16 text-black
          placeholder:text-neutral-40 
          bg-white border border-neutral-20
          focus:outline-none focus:ring-2 focus:ring-neutral-20 focus:border-neutral-20
          transition-all duration-200
          ${className}
        `}
      />
    </div>
  );
};

export default Input;
