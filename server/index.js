const express = require('express');

const middleware = require('./middleware/app.middleware');
const api = require('./API');
const app = express();

middleware(app);

app.use('/api', api);

module.exports = app;