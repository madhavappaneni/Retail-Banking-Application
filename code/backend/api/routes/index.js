const express = require('express');
const CRMRoutes = require('./v1/crmevents');

const router = express.Router();

router.use('/api/v1/crmevents', CRMRoutes);


module.exports = router;