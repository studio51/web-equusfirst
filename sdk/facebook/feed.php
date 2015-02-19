<?php

	require "initializer.php";

  $i = 0;

  foreach( $pagefeed["data"] as $post ) {

    echo "<div class=\"row\">";

    $type = $post["type"];

    $status = $type == "status";
    $link = $type == "link";
    $photo = $type == "photo";

    if ( $status || $link || $photo ) {

      echo "<div class=\"col-lg-8\">";

        if ( $status ) {
          echo "<h4>" . $app_name . " updated their Status</h4>";

          if ( empty( $post['story'] ) === false ) {

              echo "<p>" . $post["story"] . "</p>";

          } elseif ( empty( $post["message"] ) === false ) {

              echo "<p>" . $post["message"] . "</p>";
          }
        }

        if ( $link ) {
          echo "<h4>" . $app_name . " posted a Link</h4>";

          echo "<p>" . $post["name"] . "</p>";
        }

        if ( $photo ) {
          echo "<h4>" . $app_name . " added a new Post</h4>";

          if ( empty( $post['story'] ) === false ) {

              echo "<p>" . $post['story'] . "</p>";

          } elseif ( empty( $post['message'] ) === false ) {

              echo "<p>" . $post['message'] . "</p>";
          }

        }

      echo "</div>";

      echo "<div class=\"col-lg-4\">";
        echo "<div class=\"row social__post-details\">";
          echo "<div class=\"col-xs-6 col-lg-12 social__post-details__time\">";
            echo "<i class=\"fa fa-calendar\"></i>" . date("jS M, Y", ( strtotime( $post['created_time'] )));
          echo "</div>";

          echo "<div class=\"col-xs-6 col-lg-12 social__post-details__link\">";
            echo "<a href=\"" . $post["link"] . "\" target=\"_blank\">Read more.. <i class=\"fa fa-chevron-right\"></i></a>";
          echo "</div>";
        echo "</div>";
      echo "</div>";

      $i++;
    }

    echo "</div>";

    if ( $i == $items ) {
      break;
    }
  }

