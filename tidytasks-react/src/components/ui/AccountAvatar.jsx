import React from "react";
import { twMerge } from "tailwind-merge";

const AccountAvatar = ({ name, className }) => {
  return (
    <span>
      <img
        src={`https://avatar.iran.liara.run/username?username=${name}`}
        className={twMerge("size-12 rounded-full bg-border", className)}
      />
    </span>
  );
};

export default AccountAvatar;
