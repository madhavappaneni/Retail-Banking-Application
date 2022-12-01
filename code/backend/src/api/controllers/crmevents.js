const httpStatus = require('http-status');
const crmeventsService = require('../services/crmevents');

exports.getCRMEvent = async (req, res, next) => {
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


exports.updateCRMEvent = async (req, res, next) => {
    try {
        const data = req.body;
        const id = req.body["Complaint ID"];
        const response = await crmeventsService.updateCRMEvent(id, data);
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

exports.deleteCRMEvent = async (req, res, next) => {
    try {
        const response = await crmeventsService.deleteCRMEvent(req.params.complaintId);
        return res.status(httpStatus.OK).json({
            code: httpStatus.OK,
            data: response,
        });
    } catch (error) {
        return next(error);
    }
};

exports.getTransaction = async (req, res, next) => {
    try {
        const transactionId = req.params.transactionId;
        const response = await crmeventsService.getTransaction(transactionId);
        return res.status(httpStatus.OK).json({
            code: httpStatus.OK,
            data: response,
        });
    } catch (error) {
        return next(error);
    }
};

exports.getLoan = async (req, res, next) => {
    try {
        const loanId = req.params.loanId;
        const response = await crmeventsService.getLoan(loanId);
        return res.status(httpStatus.OK).json({
            code: httpStatus.OK,
            data: response,
        });
    } catch (error) {
        return next(error);
    }
};

exports.getClient = async (req, res, next) => {
    try {
        const clientId = req.params.clientId;
        const response = await crmeventsService.getClient(clientId);
        return res.status(httpStatus.OK).json({
            code: httpStatus.OK,
            data: response,
        });
    } catch (error) {
        return next(error);
    }
};

