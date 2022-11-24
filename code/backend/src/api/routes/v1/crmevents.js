const controller = require('../../controllers/crmevents');
const express = require('express');
const router = express.Router();

router
    .route('/')
    .post(controller.createCRMEvent)
    .get(controller.getcrmevents);

module.exports = router;