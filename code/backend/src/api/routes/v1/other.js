const controller = require('../../controllers/crmevents');
const express = require('express');
const router = express.Router();

router
    .route('/transactions/:transactionId')
    .get(controller.getTransaction);

router
    .route('/transactions/')
    .get(controller.getTransactions);

router
    .route('/clients/:clientId')
    .get(controller.getClient);


router
    .route('/clients/')
    .get(controller.getClients);

router
    .route('/loans/:loanId')
    .get(controller.getLoan);

router
    .route('/loans/')
    .get(controller.getLoans);

module.exports = router;