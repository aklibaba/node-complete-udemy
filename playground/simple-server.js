const http = require('http');
const fs = require('fs');
// const url = require('url');

// const homePage = fs.readFileSync('./simple-template.html', {encoding: 'utf8'});
// const AboutPage = fs.readFileSync('./about.html', {encoding: 'utf8'});

http.createServer((req, res) => {
  console.log('Server Started');
  const path = req.url;

  const template = fs.readFileSync(`.${path}.html`);


  res.write(template);
  res.end();
})
  .listen(8080);