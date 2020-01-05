# BirDb0x



Twitter bot to like tweets of a certain hashtag and follow the corresponding user too.

# installation
> npm install
> touch config.js > (insert your twitter app keys)
> node index.js

# Notes
BirDb0x is made for simple test purposes. If you want to apply this to your own account, create a twitter dev account and create an app and generate API keys and tokens. config.js is missing by default. create the file in the main path, fill in the following with your specific info.<br>

''' Javascript
module.exports = {

  consumer_key:         'yours here',
  consumer_secret:      'yours here',
  access_token:         'yours here',
  access_token_secret:  'yours here',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            false,     // optional - requires SSL certificates to be valid


};
'''
# Resources
[http://www.underd0g.co/TweetWebGraph/](Creator)
[https://developer.twitter.com/en/docs/tweets/filter-realtime/overview](TwitterDev)
[https://www.npmjs.com/package/twit](Twit Package)
