import express from "express";
import mainController from "../controllers/mainController.js";

const router = express.Router();

/* GET home page. */
router.get("/", mainController.homePage);

router.post("/sign-in", mainController.signIn);
router.post("/sign-up", mainController.signUp);

router.get("/member", mainController.member);

export default router;
