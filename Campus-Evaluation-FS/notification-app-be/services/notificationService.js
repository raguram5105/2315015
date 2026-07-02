import Notification from "../models/Notification.js";

export const createNotification = async (data) => {
    return await Notification.create(data);
};

export const getNotifications = async (page, limit, type) => {

    const query = {};

    if (type) {
        query.type = type;
    }

    const notifications = await Notification.find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 });

    return notifications;
};

export const getNotificationById = async (id) => {
    return await Notification.findById(id);
};

export const updateNotification = async (id, data) => {
    return await Notification.findByIdAndUpdate(id, data, {
        new: true
    });
};

export const deleteNotification = async (id) => {
    return await Notification.findByIdAndDelete(id);
};

export const getPriorityNotifications = async () => {

    const notifications = await Notification.find();

    const priority = {
        Placement: 3,
        Result: 2,
        Event: 1
    };

    notifications.sort((a, b) => {

        if (priority[b.type] !== priority[a.type]) {
            return priority[b.type] - priority[a.type];
        }

        return new Date(b.createdAt) - new Date(a.createdAt);

    });

    return notifications.slice(0, 10);
};

export const markAsRead = async (id) => {
    return await Notification.findByIdAndUpdate(
        id,
        { isRead: true },
        { new: true }
    );
};