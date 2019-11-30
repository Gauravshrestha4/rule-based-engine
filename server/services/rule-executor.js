const Rules = require("../models/rules");
const Metrics = require("../models/metrics");
const _ = require("lodash");
const notify = require("./email-service");

const RuleExecutor = scheduleTime => {
  Rules.find({
    scheduleTime
  }).then(rules => {
    // rules object will conatin rule having specific schedule
    _.map(rules, rule => {
      //get all the campaigns attached the the rule
      let { campaigns, conditions } = rule;
      let userIds = [];
      campaigns.map(campaign => {
        //metrics will be an object with diffrent netric values for a campaign
        Metrics.findOne({ campaign }, {}, {sort: {datetime : -1}})
          .limit(1)
          .then((metrics) => {
              console.log("metrics", metrics);
              console.log("ruleMetric", conditions.ruleMetric);
              console.log("real value", metrics[conditions.ruleMetric]);
              console.log("condition value", conditions.metricValue);
              if (metrics[conditions.ruleMetric] >= conditions.metricValue) {
                console.log("finally executed", rule.email);
                userIds.push(rule.email);
              }
          })
          .catch((error) => {
            console.log(`Some Error Occurred while performing calculations ..!!`)
          })
      });
      // console.log("emails", userIds);
      // for (let email in userIds) {
      //   notify(email);
      // }
    });
  })
  .catch((error) => {
    console.log(`Some Error Occurred while extracting rules ..!!`)
  })
};

module.exports = RuleExecutor;
