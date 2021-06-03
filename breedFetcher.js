const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) return callback(error, null);
    const data = JSON.parse(body);
    if (response.statusCode !== 200 || data.length === 0) {
      if (data.length === 0) {
        callback(Error(`No Information Received`), null);
        return;
      }
      callback(Error(`Status Code ${response.statusCode} when fetching cat information. Response: ${body}`), null);
      return;
    }
    
    callback(null, data[0].description);
  });
};

module.exports = {fetchBreedDescription};