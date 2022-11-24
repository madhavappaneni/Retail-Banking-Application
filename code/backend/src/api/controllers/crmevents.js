const httpStatus = require('http-status');
const crmeventsService = require('../services/crmevents.js');

exports.getcrmevents = async (req, res, next) => {
    try {
        const response = await crmeventsService.getCRMEvents();
        return res.status(httpStatus.OK).json({
            code: httpStatus.OK,
            data: response,
        });
    } catch (error) {
        return next(error);
    }
};

exports.createCRMEvent = async (req, res, next) => {
    try {
        const response = await crmeventsService.createCRMEvent(req.body);
        return res.status(httpStatus.OK).json({
            code: httpStatus.OK,
            data: response,
        });
    } catch (error) {
        return next(error);
    }
};