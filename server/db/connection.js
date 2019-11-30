const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/rule-engine");

// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// mongoose.connect(process.env.DB_URL)
// .then(() => {
//     console.log('Connection Established');
// })
// .catch((error) => {
//     console.log('ERROR: Could not established DB connection');
// });

// module.exports = mongoose;
