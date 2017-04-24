if(!process.env.NODE_ENV){// If not ENV variable is detected, set it to local.
  process.env.NODE_ENV = 'local';
}
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const routes = require('./routes/');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/',routes);

const server = http.Server(app);
server.listen(3000, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('App is running on port %s',3000);
});