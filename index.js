// 8    888      888b. 8    .d88b.
// 88b.  8  8d8b 8   8 88b. 8P  Y8 Yb dP
// 8  8  8  8P   8   8 8  8 8b  d8  `8.
// 88P' 888 8    888P' 88P' `Y88P' dP Yb v1.0

//underd0g [underd0g.co]
//Twitter bot to like tweets of a certain hashtag and follow the corresponding user too.


//require the npm modules
var twit = require('twit');
var fetch = require('node-fetch');
// user defined modules
var like = require('./lib/like.js');
var creds = require('./config.js');
var follow = require('./lib/follow.js');
var tweet = require('./lib/tweet.js');


//say hi
console.log('WeLcOmE tO bIrDb0x');

console.log('------------------')

//call the functionz

  //lil select action
switch (process.env.ACTION){
  case 'follow' : 
    like.like();
    break;
  case 'like':
    follow.foll0w()
    break;
  case 'tweet':
    tweet.tweet();
    break;
  case 'stream';
    stream.stream();
    break;
  default:
    console.log('Missing ACTION .env var');
    console.log("Syntax: ACTION=[tweet,follow,like] Q=[tweet, searchterm] node index.js
    break;
}






