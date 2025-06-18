

export const listUser = (req,res) =>{
  //code body
  res.json({message : "This is all USER"})
}

export const readUSer = (req,res) => {
  res.json({message : "This is Read User"})
}

export const createUser = (req,res) => {
  res.json({ message: "This is Post user" })
}

export const updateUser = (req,res) => {
  res.json({ message: "This is  update user" })
}
export const deleteUser = (req,res) => {
  const {id} = req.params
  res.json({ message: "This is delete user"})
}