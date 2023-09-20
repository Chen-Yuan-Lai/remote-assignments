import createError from "http-errors";
import express from "express";
import cors from "cors";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { fileURLToPath } from "node:url";

import router from "./routes/mainRouter.js";
import { globalErrorHandler } from "./controllers/errorController.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));

// Enable CORS
app.use(cors());

//Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// static file
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(globalErrorHandler);

export default app;
