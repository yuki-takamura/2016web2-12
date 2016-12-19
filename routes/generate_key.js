var express = require('express');
var router = express.Router();
var app = require('../app.js');
var crypto = require('crypto');

router.get('/:encrypt', function(req, res, next) {
var encrypt = req.params.encrypt;
if(encrypt !== undefined)
{
var cipher = crypto.createCipher('aes192' , global.password);
cipher.update(encrypt, 'utf8', 'hex');
var cipheredText = cipher.final('hex');
res.send(cipheredText);
return;
}
});

module.exports = router;
