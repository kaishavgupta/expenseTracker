import express  from "express";
import {register,login, user} from "../controller/auth-controller.js"
import { validate } from "../middlewares/validate-middlewares.js";
import {contactSchema, loginSchema, signupSchema} from "../validators/auth-validators.js"
import { contact } from "../controller/contact-controller.js";
import { authMiddleWare } from "../middlewares/auth-middleware.js";
const router = express.Router();


router.route("/register").post(validate(signupSchema),register)
router.route("/login").post(validate(loginSchema),login)
router.route("/contact").post(validate(contactSchema),contact)

router.route("/user").get(authMiddleWare,user)


export const authRouter=router