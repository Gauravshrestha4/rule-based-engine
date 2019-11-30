const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/rule-engine", {
//   useNewUrlParser: true
// });

mongoose
  .connect("mongodb://127.0.0.1:27017/rule-engine", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connection Established Successfully with database");
  })
  .catch(error => {
    console.log("ERROR: Could not established databse connection");
  });
