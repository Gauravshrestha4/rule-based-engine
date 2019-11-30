const Metric = require('../models/metrics');

const campaign = ['Swiggy', 'Netfix', 'Bose', 'Adidas', 'Puma'];
const pushDataService = () => {
    let metric = new Metric({
        campaignName: campaign[Math.floor(Math.random() * campaign.length)],
        impression: Math.floor(Math.random() * 100),
        clicks: Math.floor(Math.random() * 50),
        installs: Math.floor(Math.random() * 100),
        spend: Math.floor(Math.random() * 1000),
        datetime: Date.now()
    });

    return metric.save()
        .then((response) => {
            if(!response){
                return new Promise((resolve, reject) => {
                    reject();
                });
            }
            return new Promise((resolve, reject) => {
                resolve();
            })
        })
        .catch((error) => {
            return new Promise((resolve, reject) => {
                reject(new Error('Serve Error'));
            });
        })
}

module.exports = pushDataService;