<?php
    $my_file    = 'users/subscribers.csv';
    $handle     = fopen($my_file, 'a') or die('Cannot open file:  '.$my_file);
    $ip         = $_SERVER["REMOTE_ADDR"];
    $name       = $_REQUEST['name'];
    $email      = $_REQUEST['email'];
    $date       = date("Y/m/d"); 
    $message    = "\n" . $name . "," . $email . "," . $ip . "," . $date;
    fwrite($handle, $message);