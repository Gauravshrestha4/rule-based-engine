const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
.then(() => {
    console.log('Connection Established Successfully with database');
})
.catch((error) => {
    console.log('ERROR: Could not established databse connection');
});

module.exports = mongoose;