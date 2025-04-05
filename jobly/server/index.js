import cookieParser from "cookie-parser";
import {
  login,
  signup,
  authenticate,
  logout,
} from "./controllers/authController";

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(cookieParser());

server.post("/signup", (req, res) => signup(req, res, router));
server.post("/login", (req, res) => login(req, res, router));
server.post("/logout", logout);
server.get("/auth/me", authenticate);

const PORT = process.env.PORT || 3000;

server.use(router);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
