const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RulesSchema = new Schema({
    ruleName:{
        type: String,
        required: true
    },

    attachedCampaign: {
        camapaignId: {
            type: [Schema.Types.ObjectId],
            required: true
        }
    },

    scheduleTime:{
        type: Date,
        required: true
    },

    conditions:{
        expectedeCPM:{
            type: Number
        },
        expectedeCPI: {
            type: Number
        }
    }
});

const Rule = mongoose.model('Rule', RulesSchema);

module.exports = Rule;