import { decodeToken, verifyToken } from "../lib/utils.js";

export const authenticateToken = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Token not found." });

    const isValid = verifyToken(token);

    if (!isValid)
      return res.status(401).json({ message: "Invalid or expired token" });

    const user = decodeToken(token);

    if (!user)
      return res.status(401).json({ message: "Invalid or expired token" });

    req.user = user;
    next();
  } catch (error) {
    console.log("🚀 ~ authController.js:122 ~ error:", error);

    res.status(500).json({ message: "Something went wrong! Try again." });
  }
};
