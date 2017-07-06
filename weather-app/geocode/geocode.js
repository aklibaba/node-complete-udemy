/**
 * Created by Aleksander on 2017-07-06.
 */
const req = require('request');

const geocode = exports;

geocode.geocodeAddress = function (address) {

  const addressEncoded = encodeURIComponent(address);


  req({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}`,
    json: true
  }, (err, resp, body) => {
    if (err) {
      console.log(`Unable to connect, error: ${err}`);
    }
    else if (body.status === 'ZERO_RESULTS') {
      console.log('Unable to find the address');
    } else if (body.status === 'OK') {
      const lat = body.results[0].geometry.location.lat;
      const lng = body.results[0].geometry.location.lng;
      const address = body.results[0].formatted_address;
      console.log('lat', lat);
      console.log('lng', lng);
      console.log('address', address);
    }

  });
};

