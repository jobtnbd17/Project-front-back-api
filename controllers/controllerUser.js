import { Prisma } from "@prisma/client"
import prisma from "../config/prisma.js"
import { number } from "yup"



export const listUser = async (req,res,next) =>{
  //code body
  try {
    const user = await prisma.user.findMany({
      omit: {
        password : true
      }
    })
    console.log(user)
    res.json({message : "This is list all users" , result : user})
  } catch (error) {
    // console.log(error)
    next(error)
  }
  
}

export const readUSer = (req,res) => {
  res.json({message : "This is Read User"})
}

export const createUser = (req,res) => {
  res.json({ message: "This is Post user" })
}

export const updateRoleUser = async (req,res) => {
  try {
    //.1 Read params & body
    const {id} = req.params;
    const {role} = req.body;
    console.log(id , role)

    //2. Update to DB
    const user = await prisma.user.update({
      where:{
        id : Number(id)
      },
      data : {
        role : role
      }
    })
    res.json({ message: `Update Role ${user.name}` })
  } catch (error) {
    console.log(error)
  }
}
export const deleteUser = async (req,res) => {
  try {
    const {id} = req.params
    const user = await prisma.user.delete({
      where : {
        id : Number(id)
      }
    })
  res.json({ message: "Delete User success"})
  } catch (error) {
    
  }
}

export const getMe = async (req,res,next) => {
 try {
  const { id } = req.user;
  console.log(id)
  const user = await prisma.user.findFirst({
    where : {
      id : Number(id)
    },
    omit : {
      password : true
    }
  })
  res.json({result : user , message : "Backend jaa"})
 } catch (error) {
  next(error)
  console.log(error)
 }
}
export const addLocation = async (req,res,next) => {
  try {
    console.log("first")
    const {title ,lat, lng} = req.body
    const result = await prisma.map.create({
      data : {
        title : title,
        lat : +lat,
        lng : +lng,
      }
    })
    res.json({message : "Location !!", result : result.data})
  } catch (error) {
    next(error)
  }
}