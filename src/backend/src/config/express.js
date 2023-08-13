const express = require('express');
const routes = require('../api/routes');
var cors = require('cors')
const BodyParser = require('body-parser');
const { middlewareLogger } = require('./logger');

const app = express();
app.use(middlewareLogger);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'DELETE', 'UPDATE', 'POST','PATCH']
}));
app.use(routes);

// app.use(error.validationError);
// app.use(error.handler);
// app.use(error.notFound);

module.exports = app;