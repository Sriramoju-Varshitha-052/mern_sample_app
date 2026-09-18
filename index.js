let express = require("express");
let mongoose = require("mongoose");
let hrroutes = require("./routes/hr_routes");
let emproutes = require("./routes/emp_routes");
let app = express();

mongoose.connect("mongodb://localhost:27017/hrmanagement").then(
  ()=>console.log("Database connected successfully")
).catch((err)=>console.log(err));
app.use(express.json());
app.use("/api/hr", hrroutes);
app.use("/api/emp", emproutes);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});