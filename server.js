import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/user.js";
import authRouter from "./routes/auth.js";
import { error } from "./utils/error.js";
import notFound from "./utils/notfound.js";

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

app.use(error)
app.use(notFound)

//port
const PORT = 8000;

//start server
app.listen(8000, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
