import { REGEX_EMAIL } from "../lib/constants";
import {
  comparePassword,
  decodeToken,
  generateToken,
  hashPassword,
  verifyToken,
} from "../lib/utils";
import cookie from "cookie";

export const signup = async (req, res, router) => {
  try {
    const { name, email, password } = req.body;

    if (!name?.trim() || !email?.trim() || !password?.trim())
      return res.status(400).json({ message: "All fields are required." });

    if (!REGEX_EMAIL.test(email)) {
      return res.status(400).json({ message: "Invalid email address." });
    }

    const db = router.db;

    const users = db.get("users");

    const existingUser = users.find({ email }).value();
    if (existingUser) {
      return res.status(400).json({ message: "Account already exists." });
    }

    const hashedPassword = await hashPassword(password);

    const maxId = users.maxBy("id").value()?.id + 1 || 1;

    const newUser = { id: maxId, name, email, password: hashedPassword };
    users.push(newUser).write();

    const token = await generateToken({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    );

    res.status(201).json({
      message: "Account created.",
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    console.log("🚀 ~ authController.js:22 ~ error:", error);

    res.status(500).json({ message: "Something went wrong! Try again." });
  }
};

export const login = async (req, res, router) => {
  try {
    const { email, password } = req.body;

    if (!email?.trim() || !password?.trim())
      return res.status(400).json({ message: "All fields are required." });

    const db = router.db;

    const users = db.get("users");

    const existingUser = users.find({ email }).value();

    if (!existingUser) {
      return res.status(400).json({ message: "Account not found." });
    }

    const validPassword = await comparePassword(
      password,
      existingUser.password
    );

    if (!validPassword)
      return res.status(400).json({ message: "Invalid credentials." });

    const token = await generateToken({
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
    });

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    );

    res.status(201).json({
      message: "Logged in.",
      user: {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
      },
    });
  } catch (error) {
    console.log("🚀 ~ authController.js:22 ~ error:", error);

    res.status(500).json({ message: "Something went wrong! Try again." });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    path: "/",
  });

  res.status(200).json({ message: "Logged out." });
};

export const authenticate = async (req, res) => {
  try {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ message: "Token not found." });

    const isValid = verifyToken(token);

    if (!isValid)
      return res.status(403).json({ message: "Invalid or expired token" });

    const user = decodeToken(token);

    if (!user)
      return res.status(403).json({ message: "Invalid or expired token" });

    return res.status(200).json({ user });
  } catch (error) {
    console.log("🚀 ~ authController.js:122 ~ error:", error);

    res.status(500).json({ message: "Something went wrong! Try again." });
  }
};
