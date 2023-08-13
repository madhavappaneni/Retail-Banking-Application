const express = require('express');
const CRMRoutes = require('./v1/crmevents');
const OtherRoutes = require('./v1/other');


const router = express.Router();

router.use('/api/v1/crmevents', CRMRoutes);
router.use('/api/v1/', OtherRoutes);



module.exports = router;