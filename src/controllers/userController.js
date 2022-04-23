const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
  let data = req.body;
  let user = await userModel.create(data);
  res.send({status:201 , data:user})
  }
  catch(e)
  {
    res.status(500).send(e.message)
  }
  
};

const loginUser = async function (req, res) {
  try{
     let data = req.body
      let user = await userModel.findOne({ emailId: data.emailId, password: data.password });
      if (!user) res.send({status:400, msg:"invalid email and password"})
      let token = await jwt.sign({userId:user._id.toString()} , "x-auth-token")
      res.send({status:201 , data:token})
    }
    catch(e)
    { res.status(500).send(e.message) }
};

const getUserData = async function (req, res) {
  try{
  let userid = req.params.userId
  let user = await userModel.findOne({_id:userid});
  res.send({status:200 , data:user})
  }
  catch(e){ res.status(500).send(e.message) }
};

const updateUser = async function (req, res)
{
try{
  let userid = req.params.userId
  let data = req.body
  let user = await userModel.findOneAndUpdate(
    {_id:userid},
    {$set:data},
    {new:true}
  )
  res.send({status:200 , data:user})
}catch(e){res.status(500).send(e.message)}
}

const deleteUser = async function (req, res)
{
  try{
  let userid = req.params.userId
  let user = await userModel.findOneAndUpdate(
    {_id:userid},
    {$set:{isDeleted:true}},
    {new:true}
  )
  res.send({status:200 , data:user})
}catch(e){res.status(500).send(e.message)}
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;

