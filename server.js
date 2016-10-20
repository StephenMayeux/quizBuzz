// Require modules
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');

// App set up
app.use(express.static(__dirname));
app.use(logger('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

// Nodemailer set up
const smtpTransport = nodemailer.createTransport('SMTP', {
  service: 'Gmail',
  auth: {
    user: 'teststephen22@gmail.com',
    pass: 'monkeydick'
  }
});

// All requests
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Nodemailer post request
app.post('/email', (req, res) => {
  const mailOptions = {
    from: 'teststephen22@gmail.com',
    to: req.body.email,
    subject: 'Test email for Steven',
    text: 'Hopefully this back end works...'
  };

  smtpTransport.sendMail(mailOptions, (err, response) => {
    res.send('email sent!');
  })
});

// Spin it up on
const server = http.createServer(app);
server.listen(port);
console.log('Server spinning on port', port);
