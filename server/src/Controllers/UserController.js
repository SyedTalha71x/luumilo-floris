import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Models/User.js";
import { generateReferralCode } from "../Helper/Helper.js";
import nodemailer from "nodemailer";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    if (["admin"].includes(req.body.role)) {
      req.body.role = "admin";
    } else {
      req.body.role = "user";
    }

    const referralCode = generateReferralCode()

    const user = new User({
      username,
      email,
      password: hashedPassword,
      role: req.body.role,
      referralCode,
      referredBy: req.body.referredBy || null,
    });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: "Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const sendResetOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Generate 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();

    // Set expiry (e.g., 10 minutes)
    user.resetPasswordOTP = otp;
    user.resetPasswordOTPExpires = Date.now() + 10 * 60 * 1000;
    await user.save();

    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP to reset password is: ${otp}`,
    });

    res.status(200).json({ message: "OTP sent to email" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const verifyResetOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    if (!user || !user.resetPasswordOTP)
      return res.status(400).json({ message: "OTP not requested" });

    if (user.resetPasswordOTP !== otp)
      return res.status(400).json({ message: "Invalid OTP" });

    if (Date.now() > user.resetPasswordOTPExpires)
      return res.status(400).json({ message: "OTP expired" });

    res.status(200).json({ message: "OTP verified" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    const user = await User.findOne({ email });

    if (!user || !user.resetPasswordOTP)
      return res.status(400).json({ message: "OTP not requested" });

    if (user.resetPasswordOTP !== otp)
      return res.status(400).json({ message: "Invalid OTP" });

    if (Date.now() > user.resetPasswordOTPExpires)
      return res.status(400).json({ message: "OTP expired" });

    // Hash and update new password
    user.password = await bcrypt.hash(newPassword, 10);

    // Clear OTP fields
    user.resetPasswordOTP = undefined;
    user.resetPasswordOTPExpires = undefined;

    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
