import express from "express";
import dotenv from "dotenv";
import logRoutes from "./routes/logRoutes.js";
import logger from "./utils/logger.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", logRoutes);

app.get("/", async (req, res) => {

    await logger(
        "backend",
        "info",
        "handler",
        "Home route accessed"
    );

    res.send("Logging Middleware Working");

});

app.listen(5000, () => {

    console.log("Server running on port 5000");

});