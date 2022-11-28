const request = require('request');
const myBreed = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/";

// find a breed from an array of objects
const findID = (breed, array) => {
  if (!Array.isArray(array)) {
    return console.log("Invalid URL. Please try again.");
  }
  // create a variable to hold resulting object with the breed name
  const result = array.find(({name}) => name === breed);
  // if result does not exist,
  if (!result) {
    // inform and prompt user to try again
    return console.log(`${breed} is not in the database. Please try again.`);
  }
  // if found, return description of the breed
  console.log(result.description);
};

const fetchBreed = (origin, callback) => {
  request(origin, (error, response, body) => {
    // if it encounters an error,
    if (error) {
      // print error message and status code
      console.log('request error:', error);
      console.log('status code:', response && response.statusCode);
    } else {
      // parse string body to JSON format
      const data = JSON.parse(body);
      // callback is invoked when the request is complete
      callback(myBreed, data);
    }
  });
};

fetchBreed(url, findID);