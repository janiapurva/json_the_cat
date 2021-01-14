const request = require('request');


const fetchBreedDescription  = function(breedName,callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // Print the body.
    
    
    if (error) {
      callback(error,null);
      return;
    }
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null,data[0].description);
    } else {
      let nobreed = 'Breed Not Found';
      callback(nobreed);
    }
  

  
    // if (data[0]) {
    //   return (data[0].description);
    // } else {
    //   return 'Breed not found';
    // }

  });
};

module.exports = {fetchBreedDescription};