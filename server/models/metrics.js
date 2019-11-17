const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MetricSchema = new Schema({
    campaign:{
        type: Schema.Types.ObjectId
    },

    impression: {
        type: Number,
        required: true
    },

    clicks:{
        type: Number,
        required: true
    },

    spend: {
        type: Number,
        required: true
    },

    installs: {
        type: Number,
        required: true
    }
});

const Metric = mongoose.model('Metric', MetricSchema);

module.exports = Metric;