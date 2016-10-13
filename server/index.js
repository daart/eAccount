const express = require('express');
const db = require('./db/db.config');
const middleware = require('./middleware/app.middleware');
const api = require('./API');
const app = express();
const mongoose = require('mongoose');

middleware(app);

mongoose.connect(db.url);

app.use('/api', api);

module.exports = app;