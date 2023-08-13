const winston = require('winston');
const expressWinston = require('express-winston');
const DailyRotateFile = require('winston-daily-rotate-file');

exports.middlewareLogger = expressWinston.logger({
    transports: [
        new DailyRotateFile({
            filename: 'http-%DATE%.log',
            dirname: './logs',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
        new winston.transports.Console()],

    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
    ),
    expressFormat: true,
    requestWhitelist: [...expressWinston.requestWhitelist, 'body'],
    responseWhitelist: [...expressWinston.responseWhitelist, 'body'],
});

exports.logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new DailyRotateFile({
            filename: 'app-%DATE%.log',
            dirname: './logs',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '3d',
        }),
        new winston.transports.Console(),
    ]
});
