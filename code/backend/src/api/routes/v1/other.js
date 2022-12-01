const controller = require('../../controllers/crmevents');
const express = require('express');
const router = express.Router();

router
    .route('/transactions/:transactionId')
    .get(controller.getTransaction);

router
    .route('/clients/:clientId')
    .get(controller.getClient);

router
    .route('/loans/:loanId')
    .get(controller.getLoan);

module.exports = router;