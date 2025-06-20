import express from "express";
import { login, register } from "../controllers/authControllerUser.js";
import { loginSchema, registerSchema, validate } from "../validations/uerValidate.js";


//http://localhost:8000

const authRouter = express.Router();

authRouter.post("/register", validate(registerSchema), register);
authRouter.post("/login",validate(loginSchema), login);





export default authRouter;
