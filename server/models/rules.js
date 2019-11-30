const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**all these values are given by the user while creating a rule */
const RulesSchema = new Schema({
  email: {
    type: String
  },

  ruleName: {
    type: String,
    required: true
  },

  campaigns: [Schema.Types.ObjectId],

  scheduleTime: {
    type: Date,
    required: true
  },

  conditions: {
    metricValue: Number,
    operator: String,
    ruleMetric: String
  },
  status: {
    type: Boolean,
    default: true
  }
});

const Rule = mongoose.model("Rule", RulesSchema);

module.exports = Rule;
