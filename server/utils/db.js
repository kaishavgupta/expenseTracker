import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB connection failed", error);
    process.exit(0);
  }
};
