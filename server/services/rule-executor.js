const mongoose = require("mongoose");

const Rules = require("../models/rule");
const Metrics = require("../models/metrics");
const _ = require("lodash");
const notify = require("./email-service");

const RuleExecutor = schedule => {
  Rules.find({
    schedule
  }).then(rules => {
    // rules object will conatin rule having specific schedule
    _.map(rules, rule => {
      //get all the campaigns attached the the rule
      let { campaigns, conditions } = rule;
      let userIds = [];
      campaigns.map(campaign => {
        //metrics will be an object with diffrent netric values for a campaign
        let metrics = Metrics.find({ campaign });
        if (conditions.ruleMetric > campaign.ruleMetric) {
          userIds.push(rule.email);
        }
      });

      for (let email in userIds) {
        notify(ac.email);
      }
    });
  });
};

module.exports = RuleExecutor;
