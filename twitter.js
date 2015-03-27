var Twit   = require('twit'),
    async  = require('async'),
    moment = require('moment'),
    key = require('key'),
    T      = new Twit({
      consumer_key: process.env.TwitterConsumerKey || key.consumer_key,
      consumer_secret: process.env.TwitterConsumerSecret || key.consumer_secret,
      access_token: process.env.TwitterAccessToken || key.access_token,
      access_token_secret: process.env.TwitterAccessTokenSecret || key.access_token_secret
    }),

    mapReducingTweets = function(tweet, callback) {
      callback(null, simplify(tweet));
    },

    simplify = function(tweet) {
      var date = moment(tweet.created_at, "ddd MMM DD HH:mm:ss zz YYYY");
      date.lang( process.env.MomentLang || 'zh-CN' );
      return {
        date: date.format('MMMM Do YYYY, h:mm:ss a'),
        id: tweet.id,
        user: {
          id: tweet.user.id
        },
        tweet: tweet.text
      };
    };

module.exports = function(username, callback) {
  T.get("statuses/user_timeline", {
    screen_name: username,
    count: 25
  }, function(err, tweets) {
    if (err) callback(err);
    else async.map(tweets, mapReducingTweets, function(err, simplified_tweets) {
      callback(null, simplified_tweets);
    });
  });
};
