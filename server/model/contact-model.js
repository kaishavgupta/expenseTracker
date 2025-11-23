import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});


export const contactUser=mongoose.model("contactForm",contactSchema)
