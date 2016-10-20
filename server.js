// Require modules
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const mailer = require('express-mailer');
require('dotenv').config();

const port = process.env.PORT || 8080;
const app = express();

// App set up
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname));
app.use(logger('combined'));
app.use(bodyParser.json({ type: '*/*' }));

// Express-mailer set up
mailer.extend(app, {
  from: 'Ya boi, Stephen',
  host: 'smtp.gmail.com',
  secureConnection: true,
  port: 465,
  transportMethod: 'SMTP',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// All requests
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Post request for email
app.post('/email', (req, res, next) => {
  app.mailer.send('email', {
    to: req.body.email,
    subject: 'Your quizBuzz Results!',
    rapper: req.body.rapper,
    description: req.body.description
  }, (err) => {
    if (err) { next(err); }
    res.send('Email successfully sent!');
  });
});

// Spin up that server!
const server = http.createServer(app);
server.listen(port);
console.log('Server spinning on port', port);
