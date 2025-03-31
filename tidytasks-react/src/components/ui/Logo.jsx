import React from "react";
import { twMerge } from "tailwind-merge";

const Logo = ({ className, logoClassName, faviconClassName }) => {
  return (
    <div className={twMerge("flex items-center gap-1", className)}>
      <img
        alt="favicon"
        src="/favicon.svg"
        className={twMerge("w-6", faviconClassName)}
      />
      <span
        className={twMerge(
          "font-black hidden md:block text-[#aad8d5]",
          logoClassName
        )}
      >
        TidyTasks
      </span>
    </div>
  );
};

export default Logo;
