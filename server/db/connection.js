const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/rule-engine");

mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connection Established Successfully with database");
  })
  .catch(error => {
    console.log("ERROR: Could not established databse connection");
  });
