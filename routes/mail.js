const express = require('express');
const router = express.Router();
const sendEmail = require('../controllers/mailer');

router.post('/sendmail', sendEmail);

module.exports = router;
