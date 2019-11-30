const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MetricSchema = new Schema({
  //   campaignId: {
  //     type: Schema.Types.ObjectId
  //   },
  campaign: {
    type: String,
    required: true
  },
  impressions: {
    type: Number,
    required: true
  },

  clicks: {
    type: Number,
    required: true
  },

  spends: {
    type: Number,
    required: true
  },

  installs: {
    type: Number,
    required: true
  },
  datetime: {
    type: Date
  }
});

const Metric = mongoose.model("Metric", MetricSchema);

module.exports = Metric;
