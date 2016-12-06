const express = require('express');
const app = express();
const mongoose = require('mongoose');

const middleware = require('./middleware/app.middleware');
const config = require('./config/config');
const db = require('./db/db.config');
const api = require('./API');

middleware(app);

mongoose.connect(db.url);

app.set('secret', config.secret);
app.use('/api', api);

module.exports = app;