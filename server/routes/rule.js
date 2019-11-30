const router = require("express").Router();
const Rule = require("../models/rules");

/**route to save new rule as posted by the user */
router.post("/rule", (req, res) => {
  //   let userId = mongoose.Types.ObjectId(req.body.userId);
  let {
    email,
    ruleName,
    campaigns,
    scheduleTime,
    conditions,
    status
  } = req.body;
  //   let newRule = new Rule({
  //     email,
  //     ruleName: ruleName,
  //     attachedCampaign: [campaigns],
  //     scheduleTime: scheduleTime,
  //     status: status,
  //     conditions: {
  //       ruleMetric: conditions.metric,
  //       operator: conditions.operator,
  //       metricValue: conditions.metricValue
  //     }
  //   });
  let newRule = new Rule({
    email: "gaurav.shrestha04@gmail.com",
    ruleName: "testRule",
    campaigns: ["Swiggy", "Adidas"],
    status: true,
    scheduleTime: "15 Minutes",
    conditions: {
      ruleMetric: "installs",
      operator: "greater than",
      metricValue: "100"
    }
  });
  newRule
    .save()
    .then(res => {
      if (!res) {
        res.status(400).send("Record Not saved");
      } else {
        res.status(200).send("Record Saved Successfully");
      }
    })
    .catch(error => {
      res.status(500).send("Internal Server Error");
    });
});

module.exports = router;
