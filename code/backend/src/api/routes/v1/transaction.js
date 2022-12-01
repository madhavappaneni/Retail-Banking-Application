const controller = require('../../controllers/crmevents');
const express = require('express');
const router = express.Router();

router
    .route('/transactions/:transactionId')
    .get(controller.getTransaction);

module.exports = router;