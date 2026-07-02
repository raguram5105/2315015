import express from "express";

import {
    createNotification,
    getNotifications,
    getNotificationById,
    updateNotification,
    deleteNotification,
    getPriorityNotifications,
    markNotificationAsRead
} from "../controllers/notificationController.js";

const router = express.Router();

router.post("/", createNotification);

router.get("/", getNotifications);

router.get("/priority", getPriorityNotifications);

router.get("/:id", getNotificationById);

router.patch("/:id/read", markNotificationAsRead);

router.put("/:id", updateNotification);

router.delete("/:id", deleteNotification);

export default router;  