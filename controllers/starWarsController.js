// Imports a model
const StarWarsAPI = require('../model/starWarsModel');
const api = new StarWarsAPI(); // create an object of StarWarsAPI instance.

const get_characters = (req, res) => {
    // solve async method
    api.getCharacters().then((data) => {
        // render file indext at ./views/index.html and pass character names to client side
        res.render('index', {characters: data});
    });
};

// Exports method
module.exports = {
    get_characters
};