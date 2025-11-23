import { User } from "../model/user-model.js";

export const register = async (req, res, next) => {
  try {
    const { username, email, phoneNumber, password } = req.body;
    const userExist = await User.findOne({ $or: [{ email }, { phoneNumber }] });

    if (userExist) {
      const error = {
        status: 400,
        message: "Email or Phone Number already exist",
        extraDetails: "error from register auth-controller",
      };
      return next(error);
    }

    const userCreated = await User.create({
      username,
      email,
      password,
      phoneNumber,
    });
    const token = userCreated.generateToken();
    res.cookie("uid", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 30 * 60 * 1000,
      });
    res.status(200).json({
      msg: "successfully registered",
      token: token,
      userId: userCreated._id.toString(),
    });
  } catch (err) {
    const error = {
      status: 404,
      message: "Internal Server Error:",
      extraDetails: "error from register auth-controller",
    };
    console.log(err);

    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const UserExist = await User.findOne({ email });
    
    if (!UserExist) {
      const error = {
        status: 404,
        message: "User Doesn't Exists",
        extraDetails: "error from login-auth-controller",
      };
      return next(error);
    }
    const isMatch = await UserExist.checkPassword(password);
    console.log(isMatch);
    
    
    if (isMatch) {
      const token = await UserExist.generateToken();
      res.cookie("uid", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 30 * 60 * 1000,
      });

      return res.status(200).json({
        msg: `${email} Login Successfully`,
        userId: UserExist._id.toString(),
      });
    } else {
      const error = {
        status: 404,
        message: "Invalid Email or Password:",
        extraDetails: "error from login auth-controller",
      };
      next(error);
    }
  } catch (error) {
    console.log("Error: Login-auth-controller", error);
  }
};

export const user = async (req, res) => {
  try {
    const userData = req.user;

    res.status(200).json({ userData });
  } catch (err) {
    const error = {
      status: 404,
      message: "Internal Server Error:",
      extraDetails: "error from user-auth-controller",
    };
    next(error);
  }
};
