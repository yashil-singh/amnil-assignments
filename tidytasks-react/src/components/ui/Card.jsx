import React from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ children, className }) => {
  return (
    <div className={twMerge("border p-4 rounded-xl", className)}>
      {children}
    </div>
  );
};

export default Card;
