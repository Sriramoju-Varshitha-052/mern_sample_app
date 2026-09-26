let express=require("express");
let router=express.Router();
let bcrypt=require("bcrypt");
let{users}=require("../models/users");

router.post("/register",async (req, res) => {
  res.send("Register page called");
  let data=req.body;
  data.passwrord=await bcrypt.hash(data.password,10);
  let newuser=new users(data);
  let result=await newuser.save();

  res.send(result);
});

router.post("/login",async (req, res) => {
  let user=await users.findOne({email:req.body.email});
  if(user){
    let passmatch=await bcrypt.compare(req.body.password,user.password);
    if(passmatch){
      res.send("login success");
    }else{
      res.send("password invalid");
    }

  }else{
    res.send("email invalid ");
  }
});

router.get("/viewtasks", (req, res) => {
  res.send("View Tasks page called");
});

router.get("/viewtodo", (req, res) => {
    res.send("View ToDo page called");  
});

router.patch("/updateprofile/:id", async (req, res) => {
  let data=req.body;
  if(data.password){
    data.password=await bcrypt.hash(data.password,10);
  }
  let updatedata=await users.findByIdAndUpdate(req.params.id,{$set:data});
    res.send(updatedata);
})

module.exports = router;