// PACKAGES IMPORTS
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { loggerMiddleware } from "../middlewares/logger.middleware.js";

// ROUTES IMPORT

// CONFIGURATIONS
export const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(loggerMiddleware);
app.use(express.urlencoded({ extended: true }));

// ROUTES