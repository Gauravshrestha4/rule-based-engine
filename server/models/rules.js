const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RulesSchema = new Schema({
    userId : {
        type: Schema.Types.ObjectId
    },

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

    /**all these values are given by the user while creating a rule */
    conditions:{
        expectedImpressions: Number,
        expectedClicks: Number,
        expectedSpend: Number,
        expectedInstalls: Number,
        expectedeCPM:{
            type: Number
        },
        expectedeCPI: {
            type: Number
        },
        expectedeCPC: Number
    }
});

const Rule = mongoose.model('Rule', RulesSchema);

module.exports = Rule;