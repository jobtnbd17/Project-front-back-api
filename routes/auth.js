import express from "express";
import { login, register } from "../controllers/authControllerUser.js";

//http://localhost:8000

const authRouter = express.Router();

authRouter.post('/register',register)
authRouter.post('/login',login)

export default authRouter;
