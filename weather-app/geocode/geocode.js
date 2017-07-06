/**
 * Created by Aleksander on 2017-07-06.
 */
const req = require('request');

const geocode = exports;

geocode.geocodeAddress = function (address, callback) {

  const addressEncoded = encodeURIComponent(address);


  req({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}`,
    json: true
  }, (err, resp, body) => {
    if (err) {
      const errorMessage = `Unable to connect, error: ${err}`
      callback(errorMessage);
    }
    else if (body.status === 'ZERO_RESULTS') {
      const errorMessage = `Unable to find the address`;
      callback(errorMessage);
    } else if (body.status === 'OK') {
      const lat = body.results[0].geometry.location.lat;
      const lng = body.results[0].geometry.location.lng;
      const address = body.results[0].formatted_address;
      const results = {
        lat,
        lng,
        address
      };
      callback(null, results);
    }

  });
};

