import React from "react";
import { twMerge } from "tailwind-merge";

const Input = ({
  showLabel = true,
  label,
  type = "text",
  placeholder,
  value,
  name,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {showLabel && (
        <label
          className={twMerge(
            "font-semibold text-sm",
            error && "text-destructive"
          )}
        >
          {label}
        </label>
      )}
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        className={twMerge(
          "border p-2 outline-none rounded-xl text-sm px-4 py-3 ring-offset-2",
          error ? "ring-2 ring-destructive" : "focus:ring-2 focus:ring-primary"
        )}
      />
      {error && (
        <span className="text-sm text-destructive font-semibold">{error}</span>
      )}
    </div>
  );
};

export default Input;
