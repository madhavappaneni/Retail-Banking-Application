require('dotenv').config()
const app = require('./config/express');
const pg = require('./config/db.config');

const db = require("./api/models");
db.sequelize.sync({ alter: true });

port = process.env.PORT || 8000
env = process.env.ENVIRONMENT || 'development'

app.listen(port, () => console.info(`server started on port ${port} (${env})`));

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err);
});

module.exports = app;