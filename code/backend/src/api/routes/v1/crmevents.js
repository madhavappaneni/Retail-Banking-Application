const controller = require('../../controllers/crmevents');
const express = require('express');
const router = express.Router();

router
    .route('/')
    .post(controller.createCRMEvent)
    .get(controller.getCRMEvent)
    .put(controller.updateCRMEvent)


router
    .route('/:complaintId')
    .delete(controller.deleteCRMEvent);

module.exports = router;