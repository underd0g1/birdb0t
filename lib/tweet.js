// 8    888      888b. 8    .d88b.
// 88b.  8  8d8b 8   8 88b. 8P  Y8 Yb dP
// 8  8  8  8P   8   8 8  8 8b  d8  `8.
// 88P' 888 8    888P' 88P' `Y88P' dP Yb v1.0

//underd0g [underd0g.co]
//Twitter bot to like tweets of a certain hashtag and follow the corresponding user too.


//require the npm modules
var twit = require('twit');
var creds = require('../config');
var fetch = require('node-fetch');


function tweet = async(){
//say hi
//
console.log('you chose to tweet something');

console.log('------------------')

//call your credentials module
var t = new twit(creds);

let tweet = process.env.Q;

  t.post('statuses/update', { status: tweet }, function(err, data, response) {
  console.log(data)
  })




}

module.exports = {tweet}
//some documentation for some hacking of this script

// // call a new get or post: (t.[post/get] parameters)
// POST favorites/destroy: Remove a favorite
// POST direct_message/new: Send a direct message to a user
// POST lists/create: Create a new list
// POST friendships/create: Follow a user
// GET search/tweets: search tweets
// GET favorites/list
// GET statuses/lookup
// GET statuses/oembed
// GET statuses/retweeters/ids
// GET statuses/retweets/:id
// GET statuses/retweets_of_me
// POST favorites/create
// POST favorites/destroy
// POST statuses/destroy/:id
// POST statuses/retweet/:id
// POST statuses/unretweet/:id
// POST statuses/update
// POST statuses/update_with_media (deprecated)
