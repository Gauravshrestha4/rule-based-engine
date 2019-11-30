require('./server-config/server-config');
require('./db/connection');
const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const app = express();
const rule = require('./routes/rule');

const pushDataService = require('./services/push-metric-data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
/**route to post rule */
app.use(rule);

/* cron job - will execute a service that would check the rule to be executed and also do the computations */
/* We'll save the date in UTC format as it would be easier to do comparison */
/* Js dates are in UTC format */
cron.schedule('1 * * * * *', () => {
    pushDataService()
        .then(() => {
            console.log('Data Saved Successfully ..!!')
        })
        .catch((error) => {
            console.log(`${error}`)
        })

});

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is up and running on ${process.env.PORT}`);
});