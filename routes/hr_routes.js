let express=require("express");
let router=express.Router();
let {users}=require("../models/users");
router.get("/employees",async (req, res) => {
  let result=await users.find();
  res.send(result);
});

router.delete("/deleteemp/:id",async (req, res) => {
  let result=await users.findByIdAndDelete(req.params.id);
  if(result){
  res.send("emp record deleted sucess");
  }
});
router.post("/assign-task", (req, res) => {
  res.send("Task assigned");
});

router.get("/tasks", (req, res) => {
  res.send("Tasks called");
});

router.get("/notification", (req, res) => {
  res.send("Notifications called");
});

module.exports = router;