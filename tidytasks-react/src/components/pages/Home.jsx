import useAuthContext from "@/hooks/useAuthContext";
import React from "react";
import Button from "../ui/Button";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <>
      <span className="text-lg font-medium">
        Hi, {user.name?.split(" ")[0]} 👋
      </span>

      <h1 className="text-xl font-bold">Manage your daily tasks</h1>

      <section className="mt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">All Todos</h2>

          <Button className="w-fit btn-ghost">Add Todo</Button>
        </div>
      </section>
    </>
  );
};

export default Home;
