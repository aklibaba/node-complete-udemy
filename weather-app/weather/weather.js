const req = require('request');
const weather = exports;

const apiKey = 'a9996072eabbe6ed8789d3c3c7d0fd1e';
const units = 'si';


weather.getWeather = function (lat, lng, cb) {
  const url = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}?units=${units}`;

  req({
    url,
    json: true
  }, (err, resp, body) => {
    if (resp.statusCode === 200) {
      cb(undefined, {
        temp: body['currently']['temperature'],
        apparentTemp: body['currently']['apparentTemperature']
      })
    } else {
      cb(`Unable to fetch weather`);
    }
  });


};
