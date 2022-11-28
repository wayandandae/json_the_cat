const request = require('request');
const origin = "https://api.thecatapi.com/v1/breeds/";

const fetchBreedDescription = (breedName, callback) => {
  request(origin, (error, response, body) => {
    // parse string body to JSON format
    const data = JSON.parse(body);
    // create a variable to hold resulting object with the breed name
    const result = data.find(({name}) => name === breedName);
    // create a variable to hold content passed to callback
    let content;
  
    // if data cannot be processed or website returns a different status code than 200
    if (!Array.isArray(data) || response.statusCode !== 200) {
      // create a new error with message
      error = new Error("URL_NOT_AVAILABLE");
    }

    // if breedName exists in the database,
    if (result) {
      // content now holds the description string of the breed
      content = result.description;
    } else {
      // if not found in database, create a new error
      error = new Error("BREED_NOT_AVAILABLE");
    }
    // pass any system error or new errors, and content to callback function
    callback(error, content);
  });
};


module.exports = { fetchBreedDescription };
