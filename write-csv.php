<?php
    $my_file    = 'users/subscribers.csv';
    $handle     = fopen($my_file, 'a') or die('Cannot open file:  '.$my_file);
    $ip         = $_SERVER["REMOTE_ADDR"];
    $name       = $_REQUEST['name'];
    $email      = $_REQUEST['email'];
    $date       = date("Y/m/d"); 
    $user       = "\n" . $name . "," . $email . "," . $ip . "," . $date;
    fwrite($handle, $user);

    $to         = 'sa@luckypress.org'; 
    $subject    = 'Luckypress.org - New Subscriber!'; 
    $message    = $name . ' signed up for your news letters from IP address: ' . $ip . '<br>' .
                  $user; 
    $headers    = "From: no-reply@luckypress.org \r\n" . 
                  "Content-type: text/html; charset=UTF-8 \r\n"; 
    mail($to, $subject, $message, $headers); 