import { BASE_URL } from "@/lib/constants";
import bcrypt from "bcryptjs";

const useAuth = () => {
  const login = async (username, password) => {
    const usersResponse = await fetch(`${BASE_URL}/users`);
    const users = await usersResponse.json();

    const existingUser = users.find((user) => user.username === username);

    if (!existingUser) throw new Error("Account not found.");

    const isValidPassword = bcrypt.compareSync(password, existingUser.password);
    if (!isValidPassword) throw new Error("Invalid credentials.");

    const user = {
      id: existingUser.id,
      username: existingUser.username,
      name: existingUser.name,
      joined: existingUser.createdAt,
    };

    return { message: "Logged in.", user };
  };

  const signup = async (name, username, password) => {
    const usersResponse = await fetch(`${BASE_URL}/users`);
    const users = await usersResponse.json();

    const existingUser = users.find((user) => user.username === username);

    if (existingUser) throw new Error("Account already exisits.");

    if (password.trim().length < 5)
      throw new Error("Password not strong enough.");

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const maxId =
      Number(users.reduce((max, user) => (user.id > max ? user.id : max), 0)) +
      1;

    const joined = new Date();

    const body = {
      id: maxId.toString(),
      name,
      username,
      password: hashedPassword,
      createdAt: joined,
    };

    const createResponse = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!createResponse.ok)
      throw new Error("Something went wrong. Please try again.");

    const user = {
      id: maxId,
      username,
      name,
      joined,
    };

    return { message: "Account created.", user };
  };

  return { login, signup };
};

export default useAuth;
