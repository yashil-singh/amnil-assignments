import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../ui/Header";
import useAuthContext from "@/hooks/useAuthContext";

const RootLayout = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <Header />
      <div className="fluid py-8">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
