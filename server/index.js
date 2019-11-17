const express = require('express');
const bodyParser = requre('body-parser');
const app = express();


app.get('/', (req, res) => {
    console.log('OK')
});

app.listen(3000, (req, res) => {
    console.log('Server is up and running on 3000');
});