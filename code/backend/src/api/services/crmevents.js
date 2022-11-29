const { CRMEvents } = require("../models");
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
            order: [['createdAt', 'DESC']],
            limit: 10
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