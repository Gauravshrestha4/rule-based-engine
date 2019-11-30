const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const UserInfoSchema = new Schema({
  email: {
    type: String,
    required: true,
    validator() {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid");
      }
    },

    password: {
      type: String,
      required: true,
      minlength: 7
    }
  }
});

const UserInfo = mongoose.model("UserInfo", UserInfoSchema);

module.exports = UserInfo;
