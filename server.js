// Require modules
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const nodemailer = require('nodemailer');

// App set up
app.use(express.static(__dirname));

// All requests
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Spin it up on
app.listen(port);
console.log('Server started');
