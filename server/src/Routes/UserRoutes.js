import { register, login, sendResetOTP, verifyResetOTP, resetPassword } from "../Controllers/UserController.js";
import express from "express";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post("/send-otp", sendResetOTP);
router.post("/verify-otp", verifyResetOTP);
router.post("/reset-password", resetPassword);

export default router;