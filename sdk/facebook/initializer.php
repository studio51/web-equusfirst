<?php

  require_once('src/facebook.php');

  // SDK Settings

  $config = array();
  $config['appId'] = '1396666950555797';
  $config['secret'] = '9798d41a2de5a25b26ce60002a06b216';

  $facebook = new Facebook($config);

  $pageid = "641947165869977";
  $app_name = 'EquusFirst';

  $pagefeed = $facebook->api("/" . $pageid . "/feed");

  $items = 5;
