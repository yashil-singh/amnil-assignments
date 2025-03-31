import { BASE_URL } from "@/lib/api";
import bcrypt from "bcryptjs";

const useAuth = () => {
  const login = async (username, password) => {
    const usersResponse = await fetch(`${BASE_URL}/users`);
    const users = await usersResponse.json();

    const existingUser = users.find((user) => user.username === username);

    if (!existingUser) throw new Error("Account not found.");

    const isValidPassword = bcrypt.compareSync(password, existingUser.password);
    if (!isValidPassword) throw new Error("Invalid credentials.");

    const tokenPayload = {
      id: existingUser.id,
      username: existingUser.username,
      name: existingUser.name,
      joined: existingUser.createdAt,
    };

    return { message: "Logged in.", user: tokenPayload };
  };

  const signup = async (name, username, password) => {
    const usersResponse = await fetch(`${BASE_URL}/users`);
    const users = await usersResponse.json();
    console.log("🚀 ~ useAuth.js:29 ~ users:", users);

    const existingUser = users.find((user) => user.username === username);

    if (existingUser) throw new Error("Account already exisits.");

    return { message: "Account created." };
  };

  return { login, signup };
};

export default useAuth;
