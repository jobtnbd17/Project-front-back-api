import express from "express";
import { createUser, deleteUser, getMe, listUser, readUSer, updateRoleUser,  } from "../controllers/controllerUser.js";
import { authCheck } from "../middleware/auth.middleware.js";

//http://localhost:8000

const router = express.Router();

router.get('/users' ,authCheck , listUser)
router.get('/user',readUSer)
router.post('/user/role',authCheck,createUser)
router.patch('/user/role/:id',authCheck,updateRoleUser)
router.delete('/user/:id',authCheck,deleteUser)

router.get('/getme',authCheck,getMe)


// router.get("/", (req, res) => {
//   //code body
//   res.json({ message: "This is GET USERS" });
// });

// router.get("/user", (req, res) => {
//   res.json({ message: "This is GET user " });
// });

// router.post("/post", (req, res) => {
//   res.json({ message: "This is Post user" });
// });

// router.patch("/user/role/:id", (req, res) => {
//   const {id} = req.params
//   console.log(id)
//   res.json({ message: "This is  PATCH User" });
// });

// router.delete("/user/:id", (req, res) => {
//   const {id} = req.params
//   res.json({ message: `This is DELETE ${id}`});
// });

export default router;
