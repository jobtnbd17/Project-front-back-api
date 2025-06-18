import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("email invalid").required("Email is not required"),
  name: string().min(2, "Name ต้องมากกว่า 3"),
  password: string().min(6, "Password ต้องมากกว่า 6"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "confirm password invalid"
  ),
});
export const loginSchema = object({
  email: string().email("email invalid").required("Email is not required"),
  password: string().min(6, "Password ต้องมากกว่า 6"),
  
});

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body,{abortEarly : false});
    next();
  } catch (error) {
    const errMsg = error.errors.map((item)=> item);
    const errTxt = errMsg.join(",")
    const mereErr = new Error(errTxt)
    console.log(errMsg);
    next(mereErr);
  }
};