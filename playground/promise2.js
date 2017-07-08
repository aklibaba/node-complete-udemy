const req = require('request');


const geoCodeAddress = address => {
  return new Promise((resolve, reject) => {
    
    const addressEncoded = encodeURIComponent(address);
    
    req({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}`,
      json: true
    }, (err, resp, body) => {
      if ( err ) {
        const errorMessage = `Unable to connect, error: ${err}`;
        reject(errorMessage);
      }
      else if ( body.status === 'ZERO_RESULTS' ) {
        const errorMessage = `Unable to find the address`;
        reject(errorMessage);
      }
      else if ( body.status === 'OK' ) {
        const lat = body.results[ 0 ].geometry.location.lat;
        const lng = body.results[ 0 ].geometry.location.lng;
        const address = body.results[ 0 ].formatted_address;
        const results = {
          lat,
          lng,
          address
        };
        resolve(results);
      }
      
      
    })
  });
};

geoCodeAddress('19146')
.then(location => {
  console.log(JSON.stringify(location, undefined, 2));
})
.catch(err => {
  console.log(JSON.stringify(err, undefined, 2));
});