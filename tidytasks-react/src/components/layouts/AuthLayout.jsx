import React from "react";
import { Outlet } from "react-router-dom";
import Searching from "@/assets/searching.svg";
import Logo from "../ui/Logo";

const AuthLayout = () => {
  return (
    <div className="flex h-screen w-full relative">
      <Logo
        className="absolute left-1/2 max-lg:-translate-x-1/2 lg:left-8 top-8"
        logoClassName="text-2xl block"
        faviconClassName="size-8"
      />
      <section className="flex-1 mx-auto md:max-w-[600px] p-4 lg:p-12 flex items-center justify-center">
        <main className="w-full lg:p-4">
          <Outlet />
        </main>
      </section>

      <section className="flex-1 p-12 bg-primary lg:flex flex-col items-center justify-center gap-12 text-center hidden">
        <h1 className="font-black text-6xl text-background">
          Welcome to TidyTasks!
        </h1>

        <span className="bg-white rounded-full p-12 max-w-[350px] w-full overflow-hidden">
          <img src={Searching} className="" />
        </span>

        <h3 className="text-2xl font-semibold text-white max-w-[500px] mx-auto mt-2">
          Where chaos meets organization, and procrastination gets checked off
          the list!
        </h3>
      </section>
    </div>
  );
};

export default AuthLayout;
