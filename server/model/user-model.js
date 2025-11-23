import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


const JWT_SECTKEY = process.env.JWT_SECTKEY

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber:{
    type:String,
    required:true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  const saltRound = 10;  
  const hash_password = await bcrypt.hash(user.password, saltRound);
  this.password = hash_password;
  next();
});


userSchema.methods.generateToken = function() {
  try {
    return jwt.sign({
      userEmail: this.email,
    },
    JWT_SECTKEY,
     { expiresIn: "30m" } 
);
  } catch (err) {
    const error={
      status:404,
      message:`Error during JWT Token generate: ${err}`,
      extraDetails:"error from generateToken user-model"
    }
    next(error)
  }
};

userSchema.methods.checkPassword=function(password){
    try {
    
         return bcrypt.compare(password,this.password)
    } 
    
    catch (err) {

      const error={
      status:500,
      message:"Internal Server Error:",
      extraDetails:"Error During Checking Passwword at user-model"
    }
      next(error)
    }
}

export const User = new mongoose.model("User", userSchema);
