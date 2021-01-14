const request = require('request');
let input = process.argv.slice(2).toString();
//console.log (input)

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // Print the body.
  const data = JSON.parse(body);
  //console.log(data[0].name);
  
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log('Breed not found');
  }

});