import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  role: { type: String, enum: ['user', 'admin'], default: 'user' },

  firstName: { type: String },
  surname: { type: String },
  ageGroup: { type: String }, 
  language: { type: String },
  badges: { type: [String], default: [] },

  notificationsEnabled: { type: Boolean, default: false },
  weeklyProgressEnabled: { type: Boolean, default: false },

  referralCode: { type: String, unique: true, sparse: true }, 
  referredBy: { type: String }, 

  resetPasswordOTP: {
    type: String,
  },
  resetPasswordOTPExpires: {
    type: Date,
  },

}, { timestamps: true })

export default mongoose.model('User', userSchema)
