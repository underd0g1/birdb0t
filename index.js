// 8    888      888b. 8    .d88b.
// 88b.  8  8d8b 8   8 88b. 8P  Y8 Yb dP
// 8  8  8  8P   8   8 8  8 8b  d8  `8.
// 88P' 888 8    888P' 88P' `Y88P' dP Yb v1.0

//underd0g [underd0g.co]
//Twitter bot to like tweets of a certain hashtag and follow the corresponding user too.


//require the npm modules
var twit = require('twit');
var creds = require('./config');
var fetch = require('node-fetch');
var lib = require('./lib/like.js');
//say hi
console.log('WeLcOmE tO bIrDb0x');

console.log('------------------')

//call your credentials module

lib.like();




