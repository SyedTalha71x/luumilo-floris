import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Models/User.js";
import { generateReferralCode } from "../Helper/Helper.js";

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
