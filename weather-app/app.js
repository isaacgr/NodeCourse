const request = require('request');

request({
  url: "http://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+street+philadelphia",
  json: true
}, (error, response, body) => {
  console.log(body);
})
