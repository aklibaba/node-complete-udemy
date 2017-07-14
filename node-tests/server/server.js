/**
 * Created by Aleksander on 2017-07-14.
 */
const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  })
});

app.get('/users', (req, res, next) => {
  const alex = {
    name: "Alex",
    age : 30
  };
  const lukasz = {
    name: "Lukasz",
    age : 28
  };
  const peter = {
    name: "Piotr",
    age : 28
  };

  const usersArr = [alex, peter, lukasz];
  res.send(usersArr);
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
exports.app = app;