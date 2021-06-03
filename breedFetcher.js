const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(new Error("Breed Not Found"), null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = {fetchBreedDescription};