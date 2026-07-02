import * as notificationService from "../services/notificationService.js";
import logger from "../../logging-middleware/utils/logger.js";

export const createNotification = async (req, res) => {
    try {

        const notification = await notificationService.createNotification(req.body);

        await logger(
            "backend",
            "info",
            "controller",
            "Notification created successfully"
        );

        res.status(201).json(notification);

    } catch (error) {

        await logger(
            "backend",
            "error",
            "controller",
            error.message
        );

        res.status(500).json({
            message: error.message
        });
    }
};

export const getNotifications = async (req, res) => {
    try {

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const type = req.query.notification_type;

        const notifications = await notificationService.getNotifications(
            page,
            limit,
            type
        );

        await logger(
            "backend",
            "info",
            "controller",
            "Fetched notifications"
        );

        res.status(200).json(notifications);

    } catch (error) {

        await logger(
            "backend",
            "error",
            "controller",
            error.message
        );

        res.status(500).json({
            message: error.message
        });
    }
};

export const getNotificationById = async (req, res) => {
    try {

        const notification = await notificationService.getNotificationById(
            req.params.id
        );

        if (!notification) {
            return res.status(404).json({
                message: "Notification not found"
            });
        }

        await logger(
            "backend",
            "info",
            "controller",
            "Fetched notification by id"
        );

        res.status(200).json(notification);

    } catch (error) {

        await logger(
            "backend",
            "error",
            "controller",
            error.message
        );

        res.status(500).json({
            message: error.message
        });
    }
};

export const updateNotification = async (req, res) => {
    try {

        const notification = await notificationService.updateNotification(
            req.params.id,
            req.body
        );

        await logger(
            "backend",
            "info",
            "controller",
            "Notification updated"
        );

        res.status(200).json(notification);

    } catch (error) {

        await logger(
            "backend",
            "error",
            "controller",
            error.message
        );

        res.status(500).json({
            message: error.message
        });
    }
};

export const deleteNotification = async (req, res) => {
    try {

        await notificationService.deleteNotification(req.params.id);

        await logger(
            "backend",
            "info",
            "controller",
            "Notification deleted"
        );

        res.status(200).json({
            message: "Notification deleted successfully"
        });

    } catch (error) {

        await logger(
            "backend",
            "error",
            "controller",
            error.message
        );

        res.status(500).json({
            message: error.message
        });
    }
};

export const getPriorityNotifications = async (req, res) => {
    try {

        const notifications =
            await notificationService.getPriorityNotifications();

        await logger(
            "backend",
            "info",
            "controller",
            "Fetched priority notifications"
        );

        res.status(200).json(notifications);

    } catch (error) {

        await logger(
            "backend",
            "error",
            "controller",
            error.message
        );

        res.status(500).json({
            message: error.message
        });
    }
};

export const markNotificationAsRead = async (req, res) => {

    try {

        const notification =
            await notificationService.markAsRead(req.params.id);

        await logger(
            "backend",
            "info",
            "controller",
            "Notification marked as read"
        );

        res.status(200).json(notification);

    } catch (error) {

        await logger(
            "backend",
            "error",
            "controller",
            error.message
        );

        res.status(500).json({
            message: error.message
        });

    }

};