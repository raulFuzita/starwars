const express = require('express');
const router = express.Router(); // gets router instance

// Import controller
const controller = require('../controllers/starWarsController');

// If url is /index calls controller and the method get_characters
router.get('/', controller.get_characters);

// export router
module.exports = router;