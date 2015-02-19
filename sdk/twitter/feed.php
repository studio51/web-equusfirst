<?php

  require "initializer.php";

  if( !empty( $tweets )) {
    foreach( $tweets as $tweet ) {

      $tweetText = $tweet['text'];

      $tweetText = preg_replace("#(http://|(www\.))(([^\s<]{4,68})[^\s<]*)#", '<a href="http://$2$3" target="_blank">$1$2$4</a>', $tweetText);
      $tweetText = preg_replace("/@(w+)/", '<a href="http://www.twitter.com/$1" target="_blank">@$1</a>', $tweetText);
      $tweetText = preg_replace("/#(w+)/", '<a href="http://search.twitter.com/search?q=$1" target="_blank">#$1</a>', $tweetText);

      echo "<div class=\"row\">";
        echo "<div class=\"col-sm-12\">";

          echo $tweetText;

        echo "</div>";
      echo "</div>";
    }
  }
