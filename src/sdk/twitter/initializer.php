<?php

require_once('src/TwitterOAuth.php');

define('TWEET_LIMIT', 10);
define('TWITTER_USERNAME', 'equus_first');
define('CONSUMER_KEY', 'zBeoxbNU6hJGwW3e8UtKFYo3r');
define('CONSUMER_SECRET', 'BTTfWjnSqWRLPZ4JOMRGulj4GjRPorHl8izplnSxes7qgkw0Qz');
define('ACCESS_TOKEN', '2223000836-iS6dmIUM8k4kf4B8wbdrj6xeLKdvJpK5tuCHEVv');
define('ACCESS_TOKEN_SECRET', 'jWn7YnzR8TxSBT5W11IZPzu24UT8hpS4gohPLx8YC5TtW');

$twitter = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);

$twitter->ssl_verifypeer = true;

$tweets = $twitter->get('statuses/user_timeline', array('screen_name' => TWITTER_USERNAME, 'exclude_replies' => 'true', 'include_rts' => 'true', 'count' => TWEET_LIMIT));
