const { fetchBreedDescription } = require("./breedFetcher");

const getUserInput = function() {
  if (process.argv.length <= 2) {
    console.log("Please enter a breed name to search for.");
    process.exit();
  }
  const breedName = process.argv[2];
  fetchBreedDescription(breedName, (error, desc) => {
    if (error) {
      console.log(`Error (${error.message})`);
      process.exit();
    }
    console.log(desc);
  });
};

getUserInput();