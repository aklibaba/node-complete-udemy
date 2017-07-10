/**
 * Created by Aleksander on 2017-07-10.
 */
const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view-engine', 'hbs');
const port = 3000;

app.use(express.static(`${__dirname}/public`));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {

  res.render('home.hbs', {
    title: "Home page",
    welcome: "lorem",
    message: "lorem 2",
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: "About Page",
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});