const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const crypto = require('crypto');
const secretKey = 'mysecretkey';
 
 
app.use(bodyParser.json());
 
 
app.post('/', function(req, res) {
  const body = req.body;
  const signature = req.headers['x-nexus-webhook-signature'];
  var hmacDigest = crypto.createHmac("sha1",secretKey).update(JSON.stringify(body)).digest("hex");
 
  console.log('');
  console.log('');
  console.log('#############################');
  console.log('Webhook received');
  console.log('Date: ' + new Date().toISOString());
  console.log('HmacDigest: ' + hmacDigest);
  console.log('Signature: ' + signature);
  console.log('#############################');
  console.log('');
  console.log('Headers: ' + JSON.stringify(req.headers, null, 4));
  console.log('Body: ' + JSON.stringify(req.body, null, 4));
  res.send();
});
 
 
app.listen(2000, function() {
console.log('Server running on port 2000.');
});