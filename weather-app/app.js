const fs = require('fs');
const yargs = require('yargs');
const weather = require('./weather/weather');
const geocode = require('./geocode/geocode');
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Provide the address o fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
    return;
  }
  console.log(`Address: ${results.address}`);
  weather.getWeather(results['lat'], results['lng'], (err, weatherResults) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`The current weather is ${weatherResults.temp} and feels like ${weatherResults.apparentTemp}`);
    }
  });


});


