const { CRMEvents, transaction, client, loan } = require("../models");
const httpStatus = require('http-status');

exports.createCRMEvent = async (data) => {
    try {
        console.log('test input', data);
        const _crmevents = await CRMEvents.create(data);
        return _crmevents;
    } catch (e) {
        console.log('err', e);
    }
};

exports.getCRMEvents = async () => {
    try {
        const _crmevents = await CRMEvents.findAll({
            order: [['updatedAt', 'DESC']],
            limit: 10
        });
        return _crmevents;
    } catch (e) {
        console.log('err', e);
    }
};


exports.updateCRMEvent = async (id, data) => {
    try {
        const _crmevents = await CRMEvents.update(data, {
            where: { "Complaint ID": id },
            returning: true,
        });
        return _crmevents;
    } catch (e) {
        console.log('err', e);
    }
};


exports.deleteCRMEvent = async (complaintId) => {
    try {
        const _crmevents = await CRMEvents.destroy({
            where: {
                'Complaint ID': complaintId
            }
        });
        return _crmevents;
    } catch (e) {
        console.log('err', e);
    }
};


exports.getTransaction = async (transactionId) => {
    try {
        console.log(transactionId, 'test')
        const _crmevents = await transaction.findAll({
            order: [['fulldatewithtime', 'DESC']],
            where: { trans_id: transactionId },
            limit: 10
        });
        return _crmevents;
    } catch (e) {
        console.log('err', e);
    }
};

exports.getLoan = async (loanId) => {
    try {
        console.log(loanId, 'test')
        const _crmevents = await loan.findAll({
            where: { loan_id: loanId },
            limit: 10
        });
        return _crmevents;
    } catch (e) {
        console.log('err', e.name);
    }
};

exports.getClient = async (clientId) => {
    try {
        console.log(clientId, 'test')
        const _crmevents = await client.findAll({
            where: { client_id: clientId },
            limit: 10
        });
        return _crmevents;
    } catch (e) {
        console.log('err', e);
    }
};