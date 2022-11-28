const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];
// create an object to hold different error messages for console
const errorConsole = {
  "URL_NOT_AVAILABLE": "Website not found. Please enter a different URL.",
  "BREED_NOT_AVAILABLE": "Breed not found. Please enter a different breed name."
}

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', errorConsole[error.message]);
  } else {
    console.log(desc);
  }
});