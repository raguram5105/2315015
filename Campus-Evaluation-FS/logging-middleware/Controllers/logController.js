import logger from "../utils/logger.js";

export const logData = async (req, res) => {

    const { stack, level, package: packageName, message } = req.body;

    if (!stack || !level || !packageName || !message) {

        return res.status(400).json({
            message: "All fields are required"
        });

    }

    const response = await logger(
        stack,
        level,
        packageName,
        message
    );

    res.status(200).json(response);

};