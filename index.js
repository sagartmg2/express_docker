const express = require('express');
const app = express();
const port = 8000;
var jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

app.get('/', async (req, res) => {
  console.log("heree...");

  try {

    bcrypt.hash("myPlaintextPassword", 10).then(function (hash) {
      console.log({ hash })
    });

    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    res.send('Hello World 1 2 3 4 5!' + token);
  } catch (err) {
    console.error('Error hashing password:', err);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`Example app 1 2 listening at http://localhost:${port}`);
});