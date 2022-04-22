const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let user = await userModel.create(data);
  res.send(user)
};

const loginUser = async function (req, res) {
  let email = req.body.emailId;
  let pass = req.body.password;
  let user = await userModel.findOne({ emailId: email, password: pass });
  if (!user) res.send("invalid email and password")
  let token = jwt.sign({userId:user.emailId, userNo:user.number} , "x-auth-token")
  res.send({token})
};

const getUserData = async function (req, res) {
  let userid = req.params.userId
  let user = await userModel.findOne({_id:userid});
  res.send(user)
};

const updateUser = async function (req, res)
{

  let userid = req.params.userId
  let data = req.body
  let user = await userModel.findOneAndUpdate(
    {_id:userid},
    {$set:data},
    {new:true}
  )
  res.send(user)
}

const deleteUser = async function (req, res)
{

  let userid = req.params.userId
  let user = await userModel.findOneAndUpdate(
    {_id:userid},
    {$set:{isDeleted:true}},
    {new:true}
  )
  res.send(user)
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;

