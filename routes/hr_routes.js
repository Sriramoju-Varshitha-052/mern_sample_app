let express=require("express");
let router=express.Router();

router.get("/employees", (req, res) => {
  res.send("Employees called");
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