import { MongooseDocument } from "mongoose";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
  campaignName: {
    type: String
  },
  rules: {
    type: Schema.Types.ObjectId
  }
});

module.exports = mongoose.model("campaigns", CampaignSchema);
