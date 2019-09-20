import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: String,
    phoneNumber: String,
    password: String,
    verification: {
      isVerified: { type: Boolean, default: false },
      verificationCode: Number,
      codeSentTime: { type: Date, default: Date.now },
    },
  },
  {
    timestamps: true,
  },
);

export default model('User', userSchema);
