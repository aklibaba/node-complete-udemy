const yargs = require('yargs');
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

const axios = require('axios');

const addressEncoded = encodeURIComponent(argv.address);
const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}`;
const apiKey = 'a9996072eabbe6ed8789d3c3c7d0fd1e';
const units = 'si';


axios.get(geoCodeUrl)
     .then(response => {
       if ( response.data.status === 'ZERO_RESULTS' ) {
         throw new Error('Unable to find that address');
       }
       const lat = response.data.results[ 0 ].geometry.location.lat;
       const lng = response.data.results[ 0 ].geometry.location.lng;
       const address = response.data.results[ 0 ].formatted_address;
       console.log(`--- ${address} ---`);
       const weatherUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}?units=${units}`;
       return axios.get(weatherUrl);
     })
     .then(response => {
       const temp = response.data[ 'currently' ][ 'temperature' ];
       const apparentTemp = response.data[ 'currently' ][ 'apparentTemperature' ];
       console.log(`It is now ${temp} celsius, and feels like ${apparentTemp} celsius`);
       return {
         temp,
         apparentTemp
       }
     })
     .catch(err => {
       if ( err.code === 'ENOTFOUND' ) {
         console.log('Unable to connect to API servers');
       }
       else {
         console.log(err.message);
       }
  
     });
