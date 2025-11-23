import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();    // <-- FIX

const MONGODB_URI=process.env.MONGODB_URI


export const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB connection failed");
    process.exit(0);
  }
};
