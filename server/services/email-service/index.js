const sendmail = require('sendmail');
const mongoose = require('mongoose');
const UserInfo = require('../../models/user_info');
const emailer = require('./emailer');

const emailService = (userId) => {
    let userId = mongoose.Schema.Types.ObjectId(userId);
    
    UserInfo.find({_id: userId})
        .then((userInfo) => {
            emailer(userInfo.email);
        })
}

module.exports = emailService;