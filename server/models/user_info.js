const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    
    phone: {
        type: String,
        required: true
    },

    rule_id: {
        type: mongoose.Schema.Types.ObjectId
    }
})

const UserInfo = mongoose.model('UserInfo', UserInfoSchema);

module.exports = UserInfo;
