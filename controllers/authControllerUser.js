import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";
import bcrypt, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    //1. Check body
    console.log(req.body);
    const { email, name, password } = req.body;

    //2. Check email in db
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    console.log(user);

    if (user) {
      createError(400, "Email already exist !!");
    }

    //3. Bcryptjs password
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(hashPassword);

    //4. Save to db --> prisma
    const result = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashPassword,
      },
    });

    res.json({ message: `register ${result.name} success` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    // 1.
    //2.check Body
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    console.log(user);

    //3.check email
    if (!user) {
      createError(400, "Email or password invalid");
    }

    //4.check password
    const checkPassword = bcrypt.compareSync(password, user.password);
    if(!checkPassword){
      createError(400,"Email or password invalid")
    }

    //5.step Generate token
    const payload = {
      id : user.id,
      role : user.role,
    };
    const token = jwt.sign(payload , process.env.SECRET,{expiresIn: "1d"})


    res.json({ 
      message: `Welcome back ${user.name}`,
      payload:payload,
    token : token,
    });
  } catch (error) {
    next(error);
  }
};
