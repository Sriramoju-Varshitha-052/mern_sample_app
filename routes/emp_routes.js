let express=require("express");
let router=express.Router();

router.post("/register", (req, res) => {
  res.send("Register page called");
  let data=req.body;
  res.send(data.name);
});

router.post("/login", (req, res) => {
  res.send("Login page called");
});

router.get("/viewtasks", (req, res) => {
  res.send("View Tasks page called");
});

router.get("/viewtodo", (req, res) => {
    res.send("View ToDo page called");  
});

router.put("/updateprofile", (req, res) => {
    res.send("Update Profile page called");
});

module.exports = router;