import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, onClick, disabled = false }) => {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center w-full gap-1 font-bold p-2 rounded-xl bg-primary text-white cursor-pointer hover:bg-primary/90 active:bg-primary/80 transition-colors duration-200 disabled:bg-primary/50 disabled:cursor-not-allowed outline-none",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
