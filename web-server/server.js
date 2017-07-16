/*
Created 2017-07-08
 */

const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send({
    name: `<h1>hello express</h1>`,
    likes: [
      'Biking',
      'Gymnastics'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send(`<h1>About Page</h1>`)
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'The requested page is not valid'
  })
});

app.listen(3000);