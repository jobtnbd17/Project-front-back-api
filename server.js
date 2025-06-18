import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/user.js";
import authRouter from "./routes/auth.js";

const app = express();

//basic middlewere
app.use(cors()); //allow cors domains
app.use(morgan("dev")); // show logs
app.use(express.json()); // read body

//Routing GET , POST , PUT ,PATCH , DELETE
// app.get('/',(req,res)=>{
//   //code body
//   res.json({message : "req success"})
// })
app.use("/api", router);
app.use("/auth", authRouter);

//port
const PORT = 8000;

//start server
app.listen(8000, () =>
  console.log(`Server runnig at http://localhost:${PORT}`)
);
