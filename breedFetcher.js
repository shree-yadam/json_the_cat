const request = require("request");

const getCatInfo = function(breedName) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      switch (error.code) {
      case 'ENOTFOUND':
        console.log("Address not found!");
        break;
      default:
        console.log(`Error (${error.code})`);
      }
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
  });
};

const getUserInput = function() {
  if (process.argv.length <= 2) {
    console.log("Please enter a breed name to search for.");
    process.exit();
  }
  const breedName = process.argv[2];
  getCatInfo(breedName);
};

getUserInput();