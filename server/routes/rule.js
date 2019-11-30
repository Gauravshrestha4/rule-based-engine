const router = require("express").Router();
const Rule = require("../models/rules");
const mongoose = require("mongoose");

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
  let newRule = new Rule({
    email,
    ruleName: ruleName,
    attachedCampaign: [campaigns],
    scheduleTime: scheduleTime,
    status: status,
    conditions: {
      ruleMetric: conditions.metric,
      operator: conditions.operator,
      metricValue: conditions.metricValue
    }
  });

  newRule
    .save()
    .then(response => {
      if (!response) {
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
