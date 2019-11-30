const router = require('express').Router();
const Rule = require('../models/rules');
const mongoose = require('mongoose');

/**route to save new rule as posted by the user */
router.post('/save-rule', (req, res) => {

    let userId = mongoose.Types.ObjectId(req.body.userId)

    let newRule = new Rule({
        userId: userId,
        ruleName: req.body.ruleName,
        attachedCampaign:{
            campaignName: req.body.campaignName
        },
        scheduleTime: req.body.scheduleTime,
        conditions: {
            expectedImpressions:req.body.expectedImpressions,
            expectedClicks : req.body.expectedClicks,
            expectedSpend: req.body.expectedSpend,
            expectedInstalls: req.body.expectedInstalls,
            expectedeCPM: req.body.expectedeCPM,
            expectedeCPI: req.body.expectedeCPI,
            expectedeCPC: req.body.expectedeCPC
        }
    });

    newRule.save()
        .then((response) => {
            if(!response){
                res.status(400).send('Record Not saved');
            }
            else{
                res.status(200).send('Record Saved Successfully')
            }
        })
        .catch((error) => {
            res.status(500).send('Internal Server Error');
        })
})

module.exports = router;