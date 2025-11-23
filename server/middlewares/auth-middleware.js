import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../model/user-model.js";

dotenv.config();

export const authMiddleWare = async (req, res, next) => {
  // const token = req.header("Authorization");
  const token = req.cookies?.uid
  
  const JWT_SECTKEY = process.env.JWT_SECTKEY  
  if (!token) {
     const error={
      status:401,
      message:`unauthorised http , token not provided`,
      extraDetails:"Error in token validation auth-middleware"
    }
    return next(error)
  }
  const jwToken = token.replace("Bearer ", "").trim();
  
  try {
    const data = jwt.verify(jwToken, JWT_SECTKEY);
    
    const userData = await User.findOne({ email: data.userEmail }).select(
      "-password"
    );

    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    req.UserEmail=userData.email
    next();
  } catch (err) {
    const error={
      status:404,
      message:`Error: found: ${err}`,
      extraDetails:"Error in token validation auth-middleware"
    }
    next(error)
  }
};
