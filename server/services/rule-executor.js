const mongoose = require('mongoose');
const Rule = require('../models/rules');
const Metric = require('../models/metrics');

const ruleExecutorService = () => {
    return Rule.find({
        datetime: Date.now()
    })
    .then((rules) => {
        if(!rules){
            return new Promise((resolve, reject) => {
                reject();
            })
        }

        return new Promise((resolve, reject ) => {
            resolve();
        })
    })
    .catch(() => {
        return new Promise((resolve, reject) => {
            reject();
        })
    })
}

module.exports = ruleExecutorService;
