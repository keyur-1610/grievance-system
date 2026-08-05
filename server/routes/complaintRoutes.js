const router = require('express').Router();
const complaintController = require('../controllers/complaintController');

router.post('/', complaintController.createComplaint);

module.exports = router;
