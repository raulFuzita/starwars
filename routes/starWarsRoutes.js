const express = require('express');
const router = express.Router(); // gets router instance

// Import controller
const controller = require('../controllers/starWarsController');

/* If url is the root one it redirects to /index. 
 * Example: 
 * localhost:8000/ to localhost:8000/index
 */
router.get('/', (req, res) => {
    res.redirect('index');
});

// If url is /index calls controller and the method get_characters
router.get('/index', controller.get_characters);

// export router
module.exports = router;