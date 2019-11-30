const Metric = require("../models/metrics");
const Rule = require("../models/rules");
const campaign = ["Swiggy", "Netflix", "Bose", "Adidas", "Puma"];
const pushDataService = () => {
  let metric = new Metric({
    campaign: campaign[Math.floor(Math.random() * campaign.length)],
    impressions: Math.floor(Math.random() * 100),
    clicks: Math.floor(Math.random() * 50),
    installs: Math.floor(Math.random() * 100),
    spends: Math.floor(Math.random() * 1000),
    datetime: Date.now()
  });

  return metric.save();
};

const pushRuleData = () => {
  let newRule = new Rule({
    email: "gaurav.shrestha04@gmail.com",
    ruleName: "testRule3",
    campaigns: ["Netflix,Swiggy,Bose", "Adidas"],
    scheduleTime: "15 Minutes",
    status: true,
    conditions: {
      ruleMetric: "clicks",
      operator: "greater than",
      metricValue: 2
    }
  });
  return newRule.save();
};
module.exports = { pushDataService, pushRuleData };
