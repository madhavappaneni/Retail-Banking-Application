const express = require('express');
const CRMRoutes = require('./v1/crmevents');
const CRMRoutes = require('./v1/transaction');


const router = express.Router();

router.use('/api/v1/crmevents', CRMRoutes);
router.use('/api/v1/', TransactionRoutes);



module.exports = router;