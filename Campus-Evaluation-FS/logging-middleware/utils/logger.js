import axios from "axios";

const logger = async (stack, level, packageName, message) => {

    try {

        const response = await axios.post(
            process.env.LOG_API,
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.BEARER_TOKEN}`
                }
            }
        );

        console.log(
            `Logged -> [${stack}] [${level}] [${packageName}] ${message}`
        );

        console.log("Response Log", {
            logID: response.data.logID,
            message: response.data.message
        });

        return response.data;

    } catch (error) {

        console.log(
            "Logging Error:",
            error.response?.data || error.message
        );

    }

};

export default logger; 