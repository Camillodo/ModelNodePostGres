
const express = require('express');
const mainController = require('./controllers/mainController');
const errorController = require('./controllers/errorController');
const router = express.Router();


router.get('/', mainController.homePage );
router.use( errorController.notFound );

module.exports = router;
