import express from "express";
import { logData } from "../controllers/logController.js";

const router = express.Router();

router.post("/log", logData);

export default router;