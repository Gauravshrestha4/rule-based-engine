const express = require("express");
const bodyParser = require("body-parser");
const cron = require("node-cron");
const app = express();
require("./db/connection");
const user = require("./routes/user");
const rule = require("./routes/rule");
require("./server-config/server-config");

const {
  pushDataService,
  pushRuleData
} = require("./services/push-metric-data");
const RuleExecutor = require("./services/rule-executor");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**route to post rule */
app.use(rule);

//one time route for creating the user as we are not providing the signup yet
app.use(user);
/* cron job - will execute a service that would check the rule to be executed and also do the computations */
/* We'll save the date in UTC format as it would be easier to do comparison */
/* Js dates are in UTC format */
cron.schedule("1 * * * * *", () => {
  pushDataService()
    .then(() => {
      console.log("Data Saved Successfully ..!!");
    })
    .catch(error => {
      console.log(`${error}`);
    });

    // pushRuleData()
    //   .then(() => {
    //     console.log("Rule Data Saved Successfully ..!!");
    //   })
    //   .catch(error => {
    //     console.log(`${error}`);
    //   });
});

cron.schedule("*/1 * * * *", () => {
  RuleExecutor("15 Minutes");
});
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is up and running on ${process.env.PORT}`);
});
