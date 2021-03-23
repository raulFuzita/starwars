const express = require('express');
const morgan = require('morgan');
const path = require('path');
const engines = require('consolidate'); // Simple engine to render html from views folder
const dotenv = require('dotenv'); // Load variables from file .env

/**
 * ################ IMPORTANT #################
 * 
 * Dotenv will retrive the port from file .env
 * make sure you read the instructions form
 * the file .env example. 
 */
dotenv.config();
const app = express();
const port = process.env.SERVER_PORT; // SERVER_PORT variable comes from file .env
// Import a router
const router = require('./routes/starWarsRoutes');
// Set a basic engine to render an HTML file from views folder
app.set('views', path.join(__dirname, 'views'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');
// Set morgan to dev mode
app.use(morgan('dev'));

// This will tell express how to move on to next expression
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

app.use('/index', router); // index url

/* If url is the root one it redirects to /index. 
 * Example: 
 * localhost:8000/ to localhost:8000/index
 */
app.get('/', (req, res) => {
    res.redirect('/index');
}); // root url

// Start listening on port 8000
app.listen(port, () => {
    console.log('Server running on port ' + port);
});