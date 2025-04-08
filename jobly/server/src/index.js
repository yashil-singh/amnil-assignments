import cookieParser from "cookie-parser";
import jsonServer from "json-server";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import { authenticateToken } from "./middlewares/authMiddleware.js";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

export const db = router.db;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(cookieParser());

const PORT = process.env.PORT || 3000;

server.use("/api/auth", authRoutes);
server.use("/api/jobs", jobRoutes);

// server.post("/api/jobs/toggle-save/:id", authenticateToken, toggleJobSave);
// server.get("/api/jobs/saved", authenticateToken, getUserSavedPosts);

server.use("/api", router);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
