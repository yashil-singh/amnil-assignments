import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  className,
  onClick,
  disabled = false,
  variant,
}) => {
  switch (variant) {
    case "ghost":
      break;

    default:
      break;
  }
  return (
    <button
      className={twMerge("btn", className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
