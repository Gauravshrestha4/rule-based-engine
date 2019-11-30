const sendmail = require("sendmail");
const mongoose = require("mongoose");
const User = require("../../models/user");
const emailer = require("./emailer");

const emailService = email => {
  //   let email = mongoose.Schema.Types.ObjectId(userId);
  emailer(email);
  //   User.find({ email: email }).then(userInfo => {
  //     emailer(userInfo.email);
  //   });
};

module.exports = emailService;
