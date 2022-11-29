const controller = require('../../controllers/crmevents');
const express = require('express');
const router = express.Router();

router
    .route('/')
    .post(controller.createCRMEvent)
    .get(controller.getCRMEvent)

router
    .route('/:complaintId')
    .delete(controller.deleteCRMEvent);

module.exports = router;