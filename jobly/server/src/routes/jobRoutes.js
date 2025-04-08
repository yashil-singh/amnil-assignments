import express from "express";
import {
  getUserSavedJobs,
  toggleJobSave,
} from "../controllers/jobController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/toggle-save/:id", authenticateToken, toggleJobSave);
router.get("/saved", authenticateToken, getUserSavedJobs);

export default router;
