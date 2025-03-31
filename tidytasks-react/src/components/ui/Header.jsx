import React from "react";
import Logo from "./Logo";
import AccountAvatar from "./AccountAvatar";
import useAuthContext from "@/hooks/useAuthContext";

const Header = () => {
  const { user, logout } = useAuthContext();

  return (
    <header className="w-full h-18 bg-background border-b">
      <div className="fluid flex items-center h-full justify-between">
        <Logo />

        <button className="rounded-full outline-none" onClick={logout}>
          <AccountAvatar name={user?.name} className="size-10" />
        </button>
      </div>
    </header>
  );
};

export default Header;
