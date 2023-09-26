import express from "express";
import viewController from "../controllers/viewController.js";
import mainController from "../controllers/mainController.js";

const router = express.Router();

// routes for rendering page
router.get("/", viewController.homePage);
router.get("/member", viewController.member);

// routes for manipulating database
router.post("/signIn", mainController.signIn);
router.post("/signUp", mainController.signUp);

export default router;
