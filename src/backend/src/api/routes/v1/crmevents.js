const controller = require('../../controllers/crmevents');
const express = require('express');
const router = express.Router();

router
    .route('/')
    .post(controller.createCRMEvent)
    .get(controller.getCRMEvents)
    .put(controller.updateCRMEvent)


router
    .route('/:complaintId')
    .get(controller.getCRMEvent)
    .delete(controller.deleteCRMEvent);

module.exports = router;