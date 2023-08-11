require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
require('../db/conn');
const testRoute = require('../route/route');

app.use(express.json());

app.use('/', testRoute); // Mount the testRoute middleware

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8000, () => {
    console.log('Listening on port 8000');
});
