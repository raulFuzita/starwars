const axios = require('axios'); // Imports axios to requiry APIs

class StarWarsAPI {

    // Define method async to solve it later
    async getCharacters() {
        let chars = [];
        try{
          // Query all characters according to the url
          const {data} = await axios.get("https://swapi.dev/api/people/");
          // Loops through each result and stores it in a variable
          chars = data.results.map(char=>char.name);
        } catch(error){
          // Throw error
          console.log(error);
        }
        return chars; // Returns characters. Otherwise an empty array.
    }
}

// Exports class
module.exports = StarWarsAPI;